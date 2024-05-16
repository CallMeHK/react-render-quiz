import React from 'react'
import { Renders } from '../RenderCount'

export const BreedField = ({ breed, setBreed }) => {
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

export const DogField = ({
  breed,
  dog,
  setBreed,
  setDog
}) => {
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
    <BreedField breed={breed} setBreed={setBreed} />
  </article>
}

export const NameFields = ({ setter, firstName, lastName }) =>{
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
  const [name, setName] = React.useState({firstName: 'Bob', lastName: 'griffin'})
  const [dog, setDog] = React.useState('Noodle')
  const [breed, setBreed] = React.useState('Sheltie')

  return <form>
    <h2>PropsForm</h2>
    <NameFields 
      setter={setName} 
      firstName={name.firstName} 
      lastName={name.lastName}
    />
    <DogField 
      dog={dog}
      breed={breed}
      setDog={setDog}
      setBreed={setBreed}
    />
    <button type="submit">Submit <Renders /></button>
  </form>
}

export const PropsForm = () => {
  return <Form />
}


