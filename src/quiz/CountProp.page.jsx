import { useCallback, useState } from 'react'
import { CountComponent } from './CountComponent'

export const CountPropPage = () => {
  const [state, setState] = useState(1)
  const FCProp = () => <CountComponent name='FCProp' />
  const UseCallBackProp = useCallback(() => <CountComponent name='UseCallBackProp' />, [])



  return <div>
    <h2>Counter Prop examples</h2>
    <div>
      <button onClick={() => setState(n => n+1)}>
        Rerender Parent Component: {state}
      </button>
    </div>
    <CountComponent 
      name='Parent1'
      prop={<CountComponent name='Prop' />}
    />
    <CountComponent 
      name='Parent2'
      prop={<FCProp />}
    />
    <CountComponent 
      name='Parent3'
      prop={<UseCallBackProp />}
    />
    <CountComponent 
      name='Parent4'
      prop={FCProp()}
    />
    <CountComponent 
      name='Parent4'
      prop={UseCallBackProp()}
    />
  </div>
}
