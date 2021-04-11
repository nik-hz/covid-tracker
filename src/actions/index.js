import axios from 'axios'

import { COUNTRY_DATA, ALL_COUNTRY_DATA } from '../types'

export const fetchCountry = (countryName, days) => async (dispatch) => {
    const countryData = await axios.get(
        `http://disease.sh/v3/covid-19/historical/${countryName}?lastdays=5`
    )

    console.log(countryData)
    delete countryData.status

    dispatch({ type: COUNTRY_DATA, payload: countryData })
}

export const fetchGlobal = () => async (dispatch) => {
    const allData = await axios.get(
        // 'http://disease.sh/v3/covid-19/historical/all'
        'https://disease.sh/v3/covid-19/historical/all?lastdays=2'
    )

    // dispatch all data from the country
    dispatch({ type: ALL_COUNTRY_DATA, payload: allData })
}
