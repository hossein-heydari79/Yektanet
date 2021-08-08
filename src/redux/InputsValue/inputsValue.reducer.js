import { InputsValue_type } from "./inputsValue.type"


function inputsValueReducer(inputsValue = {}, action) {
    switch (action.type) {
        case InputsValue_type.ADD_INPUTS_VALUE: {
            return action.payload
        }
        default:
            return inputsValue;
    }
}

export default inputsValueReducer