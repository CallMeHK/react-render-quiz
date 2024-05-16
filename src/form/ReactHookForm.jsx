import React from 'react'
import { useForm, FormProvider, useFormContext } from "react-hook-form"
import { Renders } from '../RenderCount'

export const ReactHookFormProvider = ({ children }) => {
  const methods = useForm({
    defaultValues: {
    firstName: 'bob',
    lastName: 'griffin',
    dog: 'Noodle',
    breed: 'Sheltie'
  }
  })

  return <FormProvider {...methods}>{children}</FormProvider>
}

export const BreedField = () => {
  const { register } = useFormContext()
  return <fieldset style={{ marginLeft: 32, width: '95%' }}>
    <label>
      Breed <Renders />
      <input
        {...register('breed')}
      />
    </label>
  </fieldset>
}

export const MemoBreedField = React.memo(BreedField)

export const DogField = () => {
  const { register } = useFormContext()
  return <article>
    <fieldset>
      <header>Dog Section</header>
      <label>
        Dog name <Renders />
        <input
          {...register('dog')}
        />
      </label>
    </fieldset>
    <BreedField />
  </article>
}

export const NameFields = () =>{
  const { register } = useFormContext()
  return <fieldset>
    <article>
      <header>Person Section</header>
      <label>
        First name <Renders />
        <input
          {...register('firstName')}
        />
      </label>
      <label>
        Last name <Renders />
        <input
          {...register('lastName')}
        />
      </label>
    </article>
  </fieldset>
}

export const Form = () => {
  const { getValues } = useFormContext()
  return <form>
    <h2>ContextReactiveVarMemoForm</h2>
    <NameFields />
    <DogField />
    <button 
      type="submit"
  onClick={e => {
    e.preventDefault()
    alert(JSON.stringify(getValues(), null, 2))
  }}
    >Submit <Renders /></button>
  </form>
}

export const ReactHookForm = () => {
  return <ReactHookFormProvider><Form /></ReactHookFormProvider>
}
