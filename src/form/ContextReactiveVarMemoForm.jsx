import React from 'react'
import { makeVar, useReactiveVar } from '@apollo/client'
import { Renders } from '../RenderCount'

const FormContext = React.createContext({})

const useFormContext = () => React.useContext(FormContext)

const useCreateReactiveVar = (variable) => {
  const ref = React.useRef(makeVar(variable))
  return ref.current
}

export const FormProvider = ({ children }) => {
  const nameVar = useCreateReactiveVar({firstName: 'Bob', lastName: 'griffin'})
  const dogVar = useCreateReactiveVar('Noodle')
  const breedVar = useCreateReactiveVar('Sheltie')
  const value = {
    nameVar, dogVar, breedVar
  }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>

}

export const BreedField = () => {
  const { breedVar } = useFormContext()
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

export const MemoBreedField = React.memo(BreedField)

export const DogField = () => {
  const { dogVar } = useFormContext()
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
    <MemoBreedField />
  </article>
}

export const NameFields = () =>{
  const { nameVar } = useFormContext()
  const name = useReactiveVar(nameVar)
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
  const { nameVar, dogVar, breedVar } = useFormContext()
  return <form>
    <h2>ContextForm</h2>
    <NameFields />
    <DogField />
    <button type="submit"
  onClick={e => {
    e.preventDefault()
    alert(JSON.stringify({
      name: nameVar(), dog: dogVar(), breed: breedVar()
    }, null, 2))
  }}
    >Submit <Renders /></button>
  </form>
}

export const ContextReactiveVarMemoForm = () => {
  return <FormProvider><Form /></FormProvider>
}
