import { data_type } from './data.type'

export function setData(value) {
    return (
        {
            type: data_type.SET_DATA,
            payload: value
        }
    )
}