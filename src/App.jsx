import { useState } from 'react'
import { BasicContextComponent } from './BasicContext'
import { ReactRenderingComponent } from './ReactRendering'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container-fluid">
      <h1>Context Demo</h1>
      <ReactRenderingComponent />
      <BasicContextComponent/>
    </main>
  )
}

export default App
