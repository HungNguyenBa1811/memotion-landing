import React, { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { cn } from '../../lib/utils';

// ── Shaders ──────────────────────────────────────────────────────────

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform float u_tap;
  uniform float u_speed;
  uniform float u_amplitude;
  uniform float u_pulseMin;
  uniform float u_pulseMax;
  uniform float u_noiseType;

  float hash(float n) {
    return fract(sin(n) * 753.5453123);
  }

  float noiseHash(vec2 x) {
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    float n = p.x + p.y * 157.0;
    return mix(
      mix(hash(n + 0.0), hash(n + 1.0), f.x),
      mix(hash(n + 157.0), hash(n + 158.0), f.x),
      f.y
    );
  }

  float noiseTrig(vec2 p) {
    float x = p.x;
    float y = p.y;
    float n = sin(x * 1.0 + sin(y * 1.3)) * 0.5;
    n += sin(y * 1.0 + sin(x * 1.1)) * 0.5;
    n += sin((x + y) * 0.5) * 0.25;
    n += sin((x - y) * 0.7) * 0.25;
    return n * 0.5 + 0.5;
  }

  float noise(vec2 p) {
    if (u_noiseType < 0.5) {
      return noiseHash(p);
    } else {
      return noiseTrig(p);
    }
  }

  float fbm(vec2 p, vec3 a) {
    float v = 0.0;
    v += noise(p * a.x) * 0.50;
    v += noise(p * a.y) * 1.50;
    v += noise(p * a.z) * 0.125 * 0.1;
    return v;
  }

  vec3 drawLines(vec2 uv, vec3 fbmOffset, vec3 color1, float secs) {
    float timeVal = secs * 0.1;
    vec3 finalColor = vec3(0.0);

    vec3 colorSets[4];
    colorSets[0] = vec3(0.7, 0.05, 1.0);
    colorSets[1] = vec3(1.0, 0.19, 0.0);
    colorSets[2] = vec3(0.0, 1.0, 0.3);
    colorSets[3] = vec3(0.0, 0.38, 1.0);

    for(int i = 0; i < 4; i++) {
      float indexAsFloat = float(i);
      float amp = u_amplitude + (indexAsFloat * 0.0);
      float period = 2.0 + (indexAsFloat + 2.0);
      float thickness = mix(0.4, 0.2, noise(uv * 2.0));
      float t = abs(1.0 / (sin(uv.y + fbm(uv + timeVal * period, fbmOffset)) * amp) * thickness);
      finalColor += t * colorSets[i];
    }

    for(int i = 0; i < 4; i++) {
      float indexAsFloat = float(i);
      float amp = (u_amplitude * 0.5) + (indexAsFloat * 5.0);
      float period = 9.0 + (indexAsFloat + 2.0);
      float thickness = mix(0.1, 0.1, noise(uv * 12.0));
      float t = abs(1.0 / (sin(uv.y + fbm(uv + timeVal * period, fbmOffset)) * amp) * thickness);
      finalColor += t * colorSets[i] * color1;
    }

    return finalColor;
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy / u_resolution.x) * 1.0 - 1.0;
    uv *= 1.5;

    vec3 lineColor1 = vec3(1.0, 0.0, 0.5);
    vec3 lineColor2 = vec3(0.3, 0.5, 1.5);

    float spread = abs(u_tap);
    vec3 finalColor = vec3(0.0);

    float t = sin(u_time) * 0.5 + 0.5;
    float pulse = mix(u_pulseMin, u_pulseMax, t);

    finalColor = drawLines(uv, vec3(65.2, 40.0, 4.0), lineColor1, u_time * u_speed) * pulse;
    finalColor += drawLines(uv, vec3(5.0 * spread / 2.0, 2.1 * spread, 1.0), lineColor2, u_time * u_speed);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// ── Default config ───────────────────────────────────────────────────

const DEFAULT_CONFIG = {
  noiseType: 'trig',
  restingSpeed: 0.35,
  restingAmplitude: 80,
  restingPulseMin: 0.05,
  restingPulseMax: 0.2,
  restingTap: 1.0,
  activeSpeed: 2.8,
  activeAmplitude: 10,
  activePulseMin: 0.05,
  activePulseMax: 0.4,
  activeTap: 1.0,
  activeDuration: 0.26,
  activeEase: 'power2.out',
  restingDuration: 3,
  restingEase: 'power2.out',
};

// ── WebGL helpers ────────────────────────────────────────────────────

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl) {
  const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    return null;
  }
  return program;
}

// ── Component ────────────────────────────────────────────────────────

export function ChaosButton({ children, className, config: userConfig, ...props }) {
  const buttonRef = useRef(null);
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef(null);

  const initWebGL = useCallback(() => {
    const canvas = canvasRef.current;
    const button = buttonRef.current;
    if (!canvas || !button) return;

    const gl = canvas.getContext('webgl', { alpha: false, antialias: true });
    if (!gl) return;

    const program = createProgram(gl);
    if (!program) return;

    gl.useProgram(program);
    glRef.current = gl;

    // Fullscreen quad
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      resolution: gl.getUniformLocation(program, 'u_resolution'),
      time: gl.getUniformLocation(program, 'u_time'),
      tap: gl.getUniformLocation(program, 'u_tap'),
      speed: gl.getUniformLocation(program, 'u_speed'),
      amplitude: gl.getUniformLocation(program, 'u_amplitude'),
      pulseMin: gl.getUniformLocation(program, 'u_pulseMin'),
      pulseMax: gl.getUniformLocation(program, 'u_pulseMax'),
      noiseType: gl.getUniformLocation(program, 'u_noiseType'),
    };

    const cfg = { ...DEFAULT_CONFIG, ...userConfig };

    // Mutable state object for GSAP to tween
    const state = {
      speed: cfg.restingSpeed,
      amplitude: cfg.restingAmplitude,
      pulseMin: cfg.restingPulseMin,
      pulseMax: cfg.restingPulseMax,
      tap: cfg.restingTap,
    };
    stateRef.current = { state, uniforms, cfg };

    // Resize
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = button.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
    };

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(button);

    // Render loop
    let lastTime = 0;
    let phase = 0;

    const render = (now) => {
      const time = now / 1000;
      const dt = lastTime ? time - lastTime : 0;
      lastTime = time;

      phase += dt * state.speed;
      if (phase > 1000) phase %= 1000;

      gl.uniform1f(uniforms.time, phase);
      gl.uniform1f(uniforms.tap, state.tap);
      gl.uniform1f(uniforms.speed, 1.0);
      gl.uniform1f(uniforms.amplitude, state.amplitude);
      gl.uniform1f(uniforms.pulseMin, state.pulseMin);
      gl.uniform1f(uniforms.pulseMax, state.pulseMax);
      gl.uniform1f(uniforms.noiseType, cfg.noiseType === 'trig' ? 1.0 : 0.0);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    // Interaction handlers
    const activate = () => {
      gsap.killTweensOf(state);
      gsap.to(state, {
        speed: cfg.activeSpeed,
        amplitude: cfg.activeAmplitude,
        pulseMin: cfg.activePulseMin,
        pulseMax: cfg.activePulseMax,
        tap: cfg.activeTap,
        duration: cfg.activeDuration,
        ease: cfg.activeEase,
      });
    };

    const deactivate = () => {
      gsap.killTweensOf(state);
      gsap.to(state, {
        speed: cfg.restingSpeed,
        amplitude: cfg.restingAmplitude,
        pulseMin: cfg.restingPulseMin,
        pulseMax: cfg.restingPulseMax,
        tap: cfg.restingTap,
        duration: cfg.restingDuration,
        ease: cfg.restingEase,
      });
    };

    button.addEventListener('mousedown', activate);
    button.addEventListener('mouseup', deactivate);
    button.addEventListener('mouseleave', deactivate);
    button.addEventListener('touchstart', activate);
    button.addEventListener('touchend', deactivate);

    // Return cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      gsap.killTweensOf(state);
      button.removeEventListener('mousedown', activate);
      button.removeEventListener('mouseup', deactivate);
      button.removeEventListener('mouseleave', deactivate);
      button.removeEventListener('touchstart', activate);
      button.removeEventListener('touchend', deactivate);
    };
  }, [userConfig]);

  useEffect(() => {
    const cleanup = initWebGL();
    return cleanup;
  }, [initWebGL]);

  return (
    <button
      ref={buttonRef}
      className={cn(
        'chaos-button relative border-none bg-transparent p-0 cursor-pointer',
        'rounded-pill overflow-hidden transition-transform duration-200 ease-out',
        'hover:scale-[1.02] active:scale-[0.98]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {/* Gradient border visible behind canvas inset */}
      <span className="absolute inset-0 rounded-pill bg-gradient-to-b from-[#eee] to-[#555]" />
      {/* WebGL canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-[2px] block rounded-[inherit]"
        style={{ width: 'calc(100% - 4px)', height: 'calc(100% - 4px)' }}
      />
      {/* Label */}
      <span className="relative z-10 block text-white font-semibold tracking-wide pointer-events-none text-body px-8 h-[52px] leading-[52px]"
        style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}
      >
        {children}
      </span>
    </button>
  );
}
