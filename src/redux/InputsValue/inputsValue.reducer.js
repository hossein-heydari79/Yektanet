import { InputsValue_type } from "./inputsValue.type"

const initialValue = {
    field: "",
    ads: "",
    date: "",
    nameChanger: "",
    sort: "newest"
}

function inputsValueReducer(inputsValue = initialValue, action) {
    switch (action.type) {
        case InputsValue_type.ADD_INPUTS_VALUE: {
            return action.payload
        }
        default:
            return inputsValue;
    }
}

export default inputsValueReducer