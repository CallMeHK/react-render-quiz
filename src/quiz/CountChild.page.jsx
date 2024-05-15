import { CountComponent } from './CountComponent'

export const CountChildPage = () => {
  return <div>
    <h2>Basic Counter with Child</h2>
    <CountComponent name='CountComponentParent'>
      <CountComponent name='CountComponentChild' />
    </CountComponent>
  </div>
}
