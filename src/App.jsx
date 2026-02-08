import { useState } from 'react'
import { Button } from './components/ui/Button'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-4">
      <h1 className="text-3xl font-bold text-primary">
        RehabConnect - Setup Complete
      </h1>
      <div className="flex gap-4">
        <Button>Primary Button</Button>
        <Button variant="accent">Accent Button</Button>
      </div>
    </div>
  )
}


export default App