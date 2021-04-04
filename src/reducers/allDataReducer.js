import { COUNTRY_DATA } from '../types'

export const allDataReducer = (state = [], { type, payload }) => {
    switch (type) {
        case COUNTRY_DATA:
            console.log(
                'allDataReducer about to return ...payload:::::::',
                payload
            )
            return { ...payload }

        default:
            return state
    }
}
