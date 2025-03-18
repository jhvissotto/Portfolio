import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

import { store } from './store'


const Selector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
const Dispatch = () => useDispatch<typeof store.dispatch>()


export const use = { Selector, Dispatch }