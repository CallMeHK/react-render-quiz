import { useState, createContext, useContext, memo, useMemo } from 'react'
import { RenderCount } from './RenderCount'

export const ReactRenderingComponent = () => {
  return <article>
    <header><b>React Rendering Demo</b></header>
    <CountComponent name='Count1' />
    <CountComponent name='Count2' />
    <CountParent1 />
    <CountParent2 />
  </article>
}

export const Child = ({children}) => {
  return <div>{children}, <RenderCount component='Child'/></div>
}

const CountComponent = ({children, name, margin, prop}) => {
  const [count, setCount] = useState(0)

  return <div style={{ marginLeft: margin || 0 }}>
    <div>
      <button onClick={() => setCount(c => c+1)}>
        count is {count}, <RenderCount component={name} />
      </button>
    </div>
    {children && <div>{name} children: {children}</div>}
    {prop && <div>{name} prop: {prop}</div>}
  </div>
}

const CountParent1 = () => {
  const [count, setCount] = useState(0)

  return <div>
    <div>
      <button onClick={() => setCount(c => c+1)}>
        count is {count}, <RenderCount component={'CountParent1'} />
      </button>
    </div>
    <div className="grid">
      <CountComponent name='ChildCount1' margin={50}/>
      <CountComponent name='ChildCount2' margin={50}/>
      <CountComponent name='ChildCount3' margin={50}/>
    </div>
  </div>
}

const MemoCount = memo(CountComponent)

const CountParent2 = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const countFromParent = useMemo(() => `count from parent is ${count1}`, [count1])

  return <div>
    <div className="grid">
      <button onClick={() => setCount1(c => c+1)}>
        count is {count1}, <RenderCount component={'CountParent1'} />
      </button>
      <button onClick={() => setCount2(c => c+1)}>
        count is {count2}, <RenderCount component={'CountParent1'} />
      </button>
    </div>
    <div className="grid">
      <CountComponent name='ChildCount1' margin={50}/>
      <MemoCount name='ChildCount2' margin={50}/>
      <MemoCount name='ChildCount3' margin={50}/>
      <MemoCount name='ChildCount4' margin={50}>count from parent is {count1}</MemoCount>
      <MemoCount name='ChildCount5' margin={50}>{countFromParent}</MemoCount>
      {/* THIS ONLY WORKS IF MEMO */}
      <CountComponent name='ChildCount5' margin={50}>{countFromParent}</CountComponent>
      <MemoCount name='ChildCount6' margin={50} prop={`count from parent is ${count1}`}/>
    </div>
  </div>
}
