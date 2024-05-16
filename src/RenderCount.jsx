import { useCountRenders } from './useCountRenders'

export const RenderCount = ({ component }) => {
  const ref = useCountRenders(component)
  return <span>{component} renders: <span ref={ref}>1</span></span>
}

export const Renders = () => {
  const ref = useCountRenders()
  return <span ref={ref}>1</span>
}
