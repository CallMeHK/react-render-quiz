import { useState, createContext, useContext } from 'react'
import { RenderCount } from './RenderCount'

const BasicContext = createContext()

export const BasicContextProvider = ({children}) => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(100)

  return <BasicContext.Provider value={{count1, count2, setCount1, setCount2}}>
    <div><RenderCount component='BasicContextProvider' /></div>
    {children}
    </BasicContext.Provider>
}

const useBasicContext = () => useContext(BasicContext)

export const Child = ({children}) => {
  return <div>{children}, <RenderCount component='Child'/></div>
}

export const Count1 = () => {
  const {count1, setCount1} = useBasicContext()

  return <div>
    <button onClick={() => setCount1(c => c+1)}>
      count1 is {count1}, <RenderCount component='Count1' />
    </button>
  </div>
}

export const Count2 = () => {
  const {count2, setCount2} = useBasicContext()

  return <div>
    <button onClick={() => setCount2(c => c+1)}>
      count2 is {count2}, <RenderCount component='Count2' />
    </button>
    <Child>Child component of Count2</Child>
  </div>
}

export const CountComponents = () => {
  return <div>
    <div><RenderCount component='CountComponents' /></div>
    <div className="grid">
      <Count1 />
      <Count2 />
    </div>
    </div>
}

export const BasicContextComponent = () => {
  return <BasicContextProvider>
      <article>
        <header><b>BasicContext Demo</b></header>
        <div><RenderCount component='BasicContextComponent' /></div>
        <CountComponents />
      </article>
    </BasicContextProvider>
}
