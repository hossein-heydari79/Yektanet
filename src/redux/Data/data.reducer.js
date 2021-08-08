import initialData from '../../assets/data/data.json'

function dataReducer(data = initialData, action) {
    switch (action.type) {
        default:
            return data;
    }
}

export default dataReducer