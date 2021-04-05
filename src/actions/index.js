import axios from 'axios'

import { COUNTRY_DATA, ALL_COUNTRY_DATA } from '../types'

export const fetchCountry = (countryName, days) => async (dispatch) => {
    const allData = await axios.get('http://disease.sh/v3/covid-19/historical')

    const countryData = allData.data.filter((obj) => {
        return obj.country === countryName
    })

    console.log(countryData)

    const ExtractedData = Object.keys(countryData).map((province, index) => {
        return [province]
    })

    // const countryCovidStats = () => {

    //     // this is only for one province, so come back to this later
    //     return Object.keys(allCountriesCovidStats).map((province, index) => {
    //         // since date is stored as a string with numbers, we need to use a brackjet notation to pop it our

    //         return Object.keys(province).map((p, i) => {
    //             console.log(p)
    //             return p
    //         })
    //     })
    // }

    // dispatch all data from the country
    dispatch({ type: COUNTRY_DATA, payload: countryData })
}

export const fetchAllCountries = () => async (dispatch) => {
    const allData = await axios.get('http://disease.sh/v3/covid-19/historical')

    // dispatch all data from the country
    dispatch({ type: ALL_COUNTRY_DATA, payload: allData })
}
