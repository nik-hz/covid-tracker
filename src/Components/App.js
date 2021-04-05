import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchCountry, fetchAllCountries } from '../actions'

const App = ({ fetchCountry, fetchAllCountries, allCountriesCovidStats }) => {
    // set up some local state to manage the inputs
    const [formData, setFormData] = useState({
        country: '',
        province: '',
    })

    useEffect(() => {
        fetchAllCountries()
    }, [])

    const onSubmit = (e) => {
        console.log('submitted the form and prevented the default action')
        console.log(formData)
        e.preventDefault()
        fetchCountry(formData.country)
        // call an action with the country name from the form
        // you could add some form of verfication for the correct country name
    }

    // we add into the local state object a key value pair, with
    // the name of the text input that is calling the onChange, and the
    // value of the input
    // use the spread operator to make sure that you don't erase the state on each input
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const countryCovidStats = () => {
        // this is only for one province, so come back to this later
        return Object.keys(allCountriesCovidStats).map((province, index) => {
            // since date is stored as a string with numbers, we need to use a brackjet notation to pop it our

            return Object.keys(province).map((p, i) => {
                console.log(p)
                return p
            })
        })
    }

    //   const countryCovidStats = () => {
    //     // this is only for one province, so come back to this later
    //     return Object.keys(allCountriesCovidStats['0'].timeline.cases).map(
    //         (date, index) => {

    //             // since date is stored as a string with numbers, we need to use a brackjet notation to pop it our

    //             return (
    //                 <div>
    //                     {date}:{' '}
    //                     {allCountriesCovidStats['0'].timeline.cases[date]}
    //                 </div>
    //             )
    //         }
    //     )
    // }

    return (
        <div>
            <div>Covid Data getter</div>
            <p></p>
            <form action="" onSubmit={(e) => onSubmit(e)}>
                <input
                    type="text"
                    name="country"
                    placeholder="country"
                    onChange={(e) => onChange(e)}
                />
                <p></p>
                <button type="submit">Search</button>
            </form>
            <div>
                {allCountriesCovidStats['0']
                    ? allCountriesCovidStats['0'].country
                    : 'loading'}
            </div>
            <p></p>
            <div>
                {allCountriesCovidStats['1']
                    ? 'data for multiple provinces should be added'
                    : 'no provincial data'}
            </div>
            <p></p>
            <div>
                {allCountriesCovidStats['0'] ? countryCovidStats() : 'loading'}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allCountriesCovidStats: state.allCountriesCovidStats,
    }
}

export default connect(mapStateToProps, { fetchCountry, fetchAllCountries })(
    App
)
