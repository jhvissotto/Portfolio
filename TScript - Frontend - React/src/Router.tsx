import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Page } from './Pages'


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'                 element={<Page.Welcome         />}  />
                
                <Route path='/counter-state'    element={<Page.Counter.State   />}  />
                <Route path='/counter-hook'     element={<Page.Counter.Hook    />}  />
                <Route path='/counter-redux'    element={<Page.Counter.Redux   />}  />
                <Route path='/counter-context'  element={<Page.Counter.Context />}  />

                <Route path='/api-fetch'        element={<Page.Api.Fetch       />}  />
                <Route path='/api-react-query'  element={<Page.Api.ReactQuery  />}  />
                <Route path='/api-redux-query'  element={<Page.Api.ReduxQuery  />}  />
                
                <Route path='/form-native'      element={<Page.Form.Native     />}  />
            </Routes>
        </BrowserRouter>
    )
}