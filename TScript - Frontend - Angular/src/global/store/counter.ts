import * as ngrx from '@ngrx/store'


// ========================================= //
// ================ Configs ================ //
// ========================================= //
export const configs = {
    name: 'counter'
}


// ======================================= //
// ================ State ================ //
// ======================================= //
export interface State {
    counter: number
}

export const initialState: State = {
    counter: 0
}


// =========================================== //
// ================ Selectors ================ //
// =========================================== //
export const FeatureSelector = ngrx.createFeatureSelector<State>(configs.name)

export const selectors = {
    getState:   ngrx.createSelector(FeatureSelector, (state:State) => state),
    getCounter: ngrx.createSelector(FeatureSelector, (state:State) => state.counter),
}


// ========================================= //
// ================ Actions ================ //
// ========================================= //
export const actions = {
    increment:  ngrx.createAction(`{configs.name}.increment`),
    decrement:  ngrx.createAction(`{configs.name}.decrement`),
    reset:      ngrx.createAction(`{configs.name}.reset`),
}


// ========================================== //
// ================ Reducers ================ //
// ========================================== //
export const reducer = ngrx.createReducer(initialState,
    ngrx.on(actions.decrement, (state) => ({ counter: state.counter + 1 })), 
    ngrx.on(actions.decrement, (state) => ({ counter: state.counter - 1 })), 
    ngrx.on(actions.reset,     (state) => ({ counter:                 0 })), 
)