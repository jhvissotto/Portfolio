import { Fragment as MyApp, useState } from 'react'

import { TRPCNext } from '@/src/integration/TRPCNext'
import { validations } from '@/src/frontend/functions'



function useController() {
    
    const [input,   setInput] = useState({ email:'', password:'' }) 
    const [isValid, setValid] = useState({ email:-1, password:-1 })

    function onChange_Email(event:any) {
        const val = event.target.value
        setInput(S => ({ ...S, 'email':val }))
        setValid(S => ({ ...S, 'email':Number(validations.isEmail(val)) }))
    }
    
    function onChange_Pass(event:any) {
        const val = event.target.value
        setInput(S => ({ ...S, 'password':val }))
        setValid(S => ({ ...S, 'password':Number(!validations.isEmpty(val)) }))
    }

    return { input, setInput, isValid, setValid, onChange_Email, onChange_Pass }
}



export function Auth() {

    const signUp = useController()
    const logIn  = useController()

    const user_register = TRPCNext.users.register.useMutation()
    const user_check    = TRPCNext.users.check.useQuery({ 'email':logIn.input.email, 'password':logIn.input.password }, { enabled:false })
    

    function onSubmit_Signup(event:any) {
        event.preventDefault()
        if (signUp.isValid.email && signUp.isValid.password) {
            user_register.mutate({ 
                'email':    signUp.input.email, 
                'password': signUp.input.password 
            })
        }
    }
    
    function onSubmit_Login(event:any) {
        event.preventDefault()
        if (logIn.isValid.email && logIn.isValid.password) {
            user_check.refetch()
            const isMatch = user_check.data?.isMatch
            alert(JSON.stringify({ isMatch }))
        }
    }
    

    return (
        <MyApp>
            <h1>Sign Up</h1>
            <form onSubmit={onSubmit_Signup}>
                <input type='email'     placeholder='Email'     onChange={signUp.onChange_Email}   required={true} />
                <input type='password'  placeholder='Password'  onChange={signUp.onChange_Pass}    required={true} />
                <button type='submit'>Register</button>
            </form>

            <h1>Log In</h1>
            <form onSubmit={onSubmit_Login}>
                <input type='email'     placeholder='Email'     onChange={logIn.onChange_Email}   required={true} />
                <input type='password'  placeholder='Password'  onChange={logIn.onChange_Pass}    required={true} />
                <button type='submit'>Access</button>
            </form>
        </MyApp>
    )
}