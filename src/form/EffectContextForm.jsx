import React from 'react'
import { Renders } from '../RenderCount'

const FormContext = React.createContext({})

const useFormContext = () => React.useContext(FormContext)

export const BreedField = () => {
  const { breed, setBreed } = useFormContext()
  return <fieldset style={{ marginLeft: 32, width: '95%' }}>
    <label>
      Breed <Renders />
      <input
        name="breed"
        value={breed}
        onChange={e => setBreed(e.target.value)}
      />
    </label>
  </fieldset>
}

export const DogField = () => {
  const { dog, setDog } = useFormContext()
  return <article>
    <fieldset>
      <header>Dog Section</header>
      <label>
        Dog name <Renders />
        <input
          name="dog_name"
          value={dog}
          onChange={e => setDog(e.target.value)}
        />
      </label>
    </fieldset>
    <BreedField />
  </article>
}

export const NameFields = () =>{
  const { setter, name } = useFormContext()
  const {  firstName, lastName } = name
  return <fieldset>
    <article>
      <header>Person Section</header>
      <label>
        First name <Renders />
        <input
          name="first_name"
          value={firstName}
          onChange={e => setter({ firstName: e.target.value, lastName })}
        />
      </label>
      <label>
        Last name <Renders />
        <input
          name="last_name"
          value={lastName}
          onChange={e => setter({ lastName: e.target.value, firstName })}
        />
      </label>
    </article>
  </fieldset>
}

export const Form = () => {
  return <form>
    <h2>ContextForm</h2>
    <NameFields />
    <DogField />
    <button type="submit">Submit <Renders /></button>
  </form>
}


export const FormProvider = ({ children }) => {
  const [name, setName] = React.useState({})
  const [dog, setDog] = React.useState('')
  const [breed, setBreed] = React.useState('')
  const value = {
    name, setter: setName, dog, setDog, breed, setBreed
  }
  React.useEffect(() => {
    setName({firstName: 'Bob', lastName: 'griffin'})
    setDog('Noodle')
    setBreed('Sheltie')
  },[])

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>

}

export const EffectContextForm = () => {
  return <FormProvider><Form /></FormProvider>
}
