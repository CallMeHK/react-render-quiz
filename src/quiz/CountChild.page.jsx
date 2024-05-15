import { useCallback } from 'react'
import { CountComponent } from './CountComponent'

export const CountChildPage = () => {
  const FCChild = () => <CountComponent name='FCChild' />
  const UseCallBackChild = useCallback(() => <CountComponent name='UseCallBackChild' />, [])
  return <div>
    <h2>Counter Children examples</h2>
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
