import { useRef } from 'react'

export const useCountRenders = (component) => {
  const ref = useRef()
  const renderCount = useRef(0)
  renderCount.current++
  console.log(`${component} render: ${renderCount.current}`)
  if(ref.current){
    ref.current.innerText = renderCount.current
  }
  return ref
}
