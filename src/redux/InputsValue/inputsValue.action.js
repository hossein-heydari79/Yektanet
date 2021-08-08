import { InputsValue_type } from './inputsValue.type'

export function addInputsValue(value) {
    return (
        {
            type: InputsValue_type.ADD_INPUTS_VALUE,
            payload: value
        }
    )
}