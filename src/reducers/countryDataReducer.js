import { COUNTRY_DATA } from '../types'

export const countryDataReducer = (state = [], { type, payload }) => {
    switch (type) {
        case COUNTRY_DATA:
            return { ...payload.data }
        default:
            return state
    }
}
