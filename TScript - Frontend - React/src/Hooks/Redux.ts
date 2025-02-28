import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import type { Store_State, Store_Dispatch } from '../Redux/store'

const Selector: TypedUseSelectorHook<Store_State> = useSelector
const Dispatch = () => useDispatch<Store_Dispatch>()

export const Redux = { Selector, Dispatch }