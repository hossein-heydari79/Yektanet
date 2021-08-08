import initialData from '../../assets/data/data.json'
import { data_type } from './data.type'

function dataReducer(data = initialData, action) {
    switch (action.type) {
        case data_type.SET_DATA: {
            return action.payload
        }

        default:
            return data;
    }
}

export default dataReducer