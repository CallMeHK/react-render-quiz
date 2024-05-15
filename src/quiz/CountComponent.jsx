import { useState } from 'react'
import { RenderCount } from '../RenderCount'

export const CountComponent = ({children, name, margin, prop}) => {
  const [count, setCount] = useState(1)

  return <div style={{ marginLeft: margin || 0, border: '1px dotted green', padding: 16 }}>
    <div>
      <button onClick={() => setCount(c => c+1)}>
        {name} count is {count}, <RenderCount component={name} />
      </button>
    </div>
    {children && <div>{name} children: 
      <div style={{ border: 'dashed orange', padding: 10 }} className='grid'>{children}</div>
    </div>}
    {prop && <div style={{ border: 'dashed yellow', padding: 10 }}>{name} prop: {prop}</div>}
  </div>
}
