import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Page } from './Pages'


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'         element={<Page.Welcome />}  />
                <Route path='/counter'  element={<Page.Counter />}  />
                <Route path='/redux'    element={<Page.Redux   />}  />
                <Route path='/context'  element={<Page.Context />}  />
            </Routes>
        </BrowserRouter>
    )
}