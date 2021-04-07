import { combineReducers } from 'redux'

import { allDataReducer } from './allDataReducer'
import { countryDataReducer } from './countryDataReducer'

export const rootReducers = combineReducers({
    allCountriesCovidStats: allDataReducer,
    countryCovidStats: countryDataReducer,
})
