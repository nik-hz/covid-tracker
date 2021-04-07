import { ALL_COUNTRY_DATA } from '../types'

export const allDataReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ALL_COUNTRY_DATA:
            return { ...state, ...payload.data }
        default:
            return state
    }
}
