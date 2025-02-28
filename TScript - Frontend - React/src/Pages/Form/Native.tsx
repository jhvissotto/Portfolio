import React from 'react'
import validator from 'validator'


type Input = React.ChangeEvent<HTMLInputElement>
type Form  = React.FormEvent<HTMLFormElement>


const initial = {
    name:  { value:'', valid:-1 },
    email: { value:'', valid:-1 },
    pass:  { value:'', valid:-1 },
}


export function Native() {
    
    const [input, setInput] = React.useState(initial)
    const [data,  setData]  = React.useState(initial)


    function onName(event:Input) {
        const val = event.target.value
        setInput(S => ({...S, name: { 
            value: val, 
            valid: Number(validator.isLength(val, { min:3 })) 
        }})) 
    }
    
    function onEmail(event:Input) {
        const val = event.target.value
        setInput(S => ({...S, email: { 
            value: val, 
            valid: Number(validator.isEmail(val)) 
        }})) 
    }
    
    function onPass(event:Input) {
        const val = event.target.value
        setInput(S => ({...S, pass: { 
            value: val, 
            valid: Number(validator.isStrongPassword(val)) 
        }})) 
    }


    function onSubmit(event:Form) {
        event.preventDefault()
        setData(input)
    }
    
    return (
        <>
            <h1>Form - Native</h1>

            <form onSubmit={onSubmit}>
                <input  type='text'      name='name'   placeholder='Your Name'  onChange={onName}   /><br />
                <input  type='email'     name='email'  placeholder='user@mail'  onChange={onEmail}  /><br />
                <input  type='password'  name='pass'   placeholder='******'     onChange={onPass}   /><br />
                <button type='submit'>Submit</button>
            </form>

            <h3>Data</h3>
            <code>
                {JSON.stringify(data, null, 2)}
            </code>    
        </>
    )
}