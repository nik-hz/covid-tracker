import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchCountry, fetchGlobal } from '../actions'

const App = ({
    fetchCountry,
    fetchGlobal,
    allCountriesCovidStats,
    countryCovidStats,
}) => {
    // set up some local state to manage the inputs
    const [formData, setFormData] = useState({
        country: '',
        province: '',
    })

    useEffect(() => {
        fetchGlobal()
    }, [])

    const onSubmit = (e) => {
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

    const renderCountryCovidStats = () => {
        return Object.keys(countryCovidStats.timeline.cases).map((date) => {
            return (
                <div>
                    {date}: {countryCovidStats.timeline.cases[date]} cases
                    <br />
                    {date}: {countryCovidStats.timeline.deaths[date]} deaths
                    <br />
                    {date}: {countryCovidStats.timeline.recovered[date]}{' '}
                    recovered
                    <p></p>
                </div>
            )
        })
    }

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
            <p></p>
            <div>
                {countryCovidStats ? countryCovidStats.country : 'loading'}
            </div>
            <p></p>
            <div>
                {countryCovidStats ? renderCountryCovidStats() : 'loading'}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allCountriesCovidStats: state.allCountriesCovidStats,
        countryCovidStats: state.countryCovidStats,
    }
}

export default connect(mapStateToProps, { fetchCountry, fetchGlobal })(App)
