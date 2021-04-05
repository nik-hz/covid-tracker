import axios from 'axios'

import { COUNTRY_DATA, ALL_COUNTRY_DATA } from '../types'

export const fetchCountry = (countryName, days) => async (dispatch) => {
    const allData = await axios.get('http://disease.sh/v3/covid-19/historical')

    const countryData = allData.data.filter((obj) => {
        return obj.country === countryName
    })

    // dispatch all data from the country
    dispatch({ type: COUNTRY_DATA, payload: countryData })
}

export const fetchAllCountries = () => async (dispatch) => {
    const allData = await axios.get('http://disease.sh/v3/covid-19/historical')

    // dispatch all data from the country
    dispatch({ type: ALL_COUNTRY_DATA, payload: allData })
}
