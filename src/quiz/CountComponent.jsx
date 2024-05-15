import { useState } from 'react'
import { RenderCount } from '../RenderCount'

export const CountComponent = ({children, name, margin, prop}) => {
  const [count, setCount] = useState(1)

  return <div style={{ marginLeft: margin || 0, border: '1px dashed orange', padding: 16 }}>
    <div>
      <button onClick={() => setCount(c => c+1)}>
        {name} count is {count}, <RenderCount component={name} />
      </button>
    </div>
    {children && <div>{name} children: 
      <div style={{ padding: 8 }}>{children}</div>
    </div>}
    {prop && <div>{name} prop: 
      <div style={{ padding: 8 }}>{prop}</div>
    </div>}
  </div>
}
