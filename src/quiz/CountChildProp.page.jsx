import { CountComponent } from './CountComponent'

export const CountChildPropPage = () => {
  return <div>
    <h2>Basic Counter with Children and Props</h2>
    <CountComponent 
      name='Parent'
      prop={<CountComponent name='Prop' />}
      >
      <CountComponent name='Child' />
    </CountComponent>
  </div>
}
