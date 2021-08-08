import { combineReducers } from 'redux'

import inputsValueReducer from './InputsValue/inputsValue.reducer'
import dataReducer from './Data/data.reducer'

const reducers = combineReducers({
    inputsValueReducer: inputsValueReducer,
    dataReducer: dataReducer
})

export default reducers