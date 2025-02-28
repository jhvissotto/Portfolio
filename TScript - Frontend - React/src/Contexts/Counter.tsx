import React from 'react'


function feature() {
    const [value, setValue] = React.useState(0)
    
    function increment() {
        setValue(x => x + 1)
    }
    
    function decrement() {
        setValue(x => x - 1)
    }
    
    function reset() {
        setValue(0)
    }

    return { value, increment, decrement, reset }
}


type Feature = ReturnType<typeof feature>


const Ctx = React.createContext<Feature>({} as Feature)


function Provider({ children }: React.PropsWithChildren) {
    return (
        <Ctx.Provider value={feature()}>
            {children}
        </Ctx.Provider>
    )
}


function useHook() {
    return React.useContext(Ctx)
}


export const Counter = { Provider, useHook }