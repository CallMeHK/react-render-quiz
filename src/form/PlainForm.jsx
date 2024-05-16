import { Renders } from '../RenderCount'

export const BreedField = () => {
  return <fieldset style={{ marginLeft: 32, width: '95%' }}>
    <label>
      Breed <Renders />
      <input
        name="breed"
      />
    </label>
  </fieldset>
}

export const DogField = () => {
  return <article>
    <fieldset>
      <label>
        Dog name <Renders />
        <input
          name="dog_name"
        />
      </label>
    </fieldset>
    <BreedField />
  </article>
}

export const NameFields = () =>{
  return <fieldset>
    <article>
      <header>Name Section</header>
      <label>
        First name <Renders />
        <input
          name="first_name"
        />
      </label>
      <label>
        Last name <Renders />
        <input
          name="last_name"
        />
      </label>
    </article>
  </fieldset>
}

export const Form = () => {
  return <form>
    <h2>PlainForm</h2>
    <NameFields />
    <DogField />
    <input
      type="submit"
      value="Submit"
    />
  </form>
}

export const PlainForm = () => {
  return <Form />
}


