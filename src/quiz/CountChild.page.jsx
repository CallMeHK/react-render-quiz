import { useCallback, useState } from 'react'
import { CountComponent } from './CountComponent'

export const CountChildPage = () => {
  const [state, setState] = useState(1)
  const FCChild = () => <CountComponent name='FCChild' />
  const UseCallBackChild = useCallback(() => <CountComponent name='UseCallBackChild' />, [])
  return <div>
    <h2>Counter Children examples</h2>
    <div>
      <button onClick={() => setState(n => n+1)}>
        Rerender Parent Component: {state}
      </button>
    </div>
    <CountComponent 
      name='Parent'
      >
      <CountComponent name='Child' />
      <FCChild />
      <UseCallBackChild />
      {FCChild()}
      {UseCallBackChild()}
    </CountComponent>
  </div>
}
