import axios from 'axios'

import { COUNTRY_DATA } from '../types'

export const fetchCountry = (countryName = 'China', days) => async (
    dispatch
) => {
    const allData = await axios.get('http://disease.sh/v3/covid-19/historical')

    const countryData = allData.data.filter((obj) => {
        return obj.country === countryName
    })

    // dispatch all data from the country
    dispatch({ type: COUNTRY_DATA, payload: countryData })
}
