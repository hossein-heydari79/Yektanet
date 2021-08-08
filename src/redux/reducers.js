import { combineReducers } from 'redux'

import inputsValueReducer from './InputsValue/inputsValue.reducer'

const reducers = combineReducers({
    inputsValueReducer: inputsValueReducer
})

export default reducers