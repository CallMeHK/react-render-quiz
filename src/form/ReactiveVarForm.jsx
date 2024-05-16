import React from 'react'
import { makeVar, useReactiveVar } from '@apollo/client'
import { Renders } from '../RenderCount'


const nameVar = makeVar({firstName: 'Bob', lastName: 'griffin'})
const dogVar = makeVar('Noodle')
const breedVar = makeVar('Sheltie')

export const BreedField = () => {
  const breed = useReactiveVar(breedVar)
  return <fieldset style={{ marginLeft: 32, width: '95%' }}>
    <label>
      Breed <Renders />
      <input
        name="breed"
        value={breed}
        onChange={e => breedVar(e.target.value)}
      />
    </label>
  </fieldset>
}

export const DogField = () => {
  const dog = useReactiveVar(dogVar)
  return <article>
    <fieldset>
      <header>Dog Section</header>
      <label>
        Dog name <Renders />
        <input
          name="dog_name"
          value={dog}
          onChange={e => dogVar(e.target.value)}
        />
      </label>
    </fieldset>
    <BreedField />
  </article>
}

export const NameFields = () =>{
  const name = useReactiveVar(nameVar)
  console.log(name)
  const {  firstName, lastName } = name
  return <fieldset>
    <article>
      <header>Person Section</header>
      <label>
        First name <Renders />
        <input
          name="first_name"
          value={firstName}
          onChange={e => nameVar({ firstName: e.target.value, lastName })}
        />
      </label>
      <label>
        Last name <Renders />
        <input
          name="last_name"
          value={lastName}
          onChange={e => nameVar({ lastName: e.target.value, firstName })}
        />
      </label>
    </article>
  </fieldset>
}

export const Form = () => {
  return <form>
    <h2>ReactiveVarForm</h2>
    <NameFields />
    <DogField />
    <button type="submit">Submit <Renders /></button>
  </form>
}

export const ReactiveVarForm = () => {
  return <Form />
}
