import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchCountry, fetchGlobal } from '../actions'

import '../index.css'

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
        return Object.keys(countryCovidStats.timeline.cases).map((date, i) => {
            return (
                <div key={i} className="card">
                    <p>{date}</p>
                    <p>{countryCovidStats.timeline.cases[date]} cases</p>
                    <p>{countryCovidStats.timeline.deaths[date]} deaths</p>{' '}
                    <p>
                        {countryCovidStats.timeline.recovered[date]} recovered
                    </p>
                </div>
            )
        })
    }

    const renderAllCountriesCovidStats = () => {
        console.log(allCountriesCovidStats)
        return Object.keys(allCountriesCovidStats.cases).map((date, i) => {
            return (
                <div key={i} className="card">
                    <p>{date}</p>
                    <p>{allCountriesCovidStats.cases[date]} cases</p>
                    <p>{allCountriesCovidStats.deaths[date]} deaths</p>{' '}
                    <p>{allCountriesCovidStats.recovered[date]} recovered</p>
                </div>
            )
        })
    }

    return (
        <div className="app">
            <div className="title item">Covid Tracker</div>

            <div className="global-data">
                {allCountriesCovidStats.cases
                    ? renderAllCountriesCovidStats()
                    : 'fetching global data'}
            </div>

            <form action="" onSubmit={(e) => onSubmit(e)} className="form item">
                <input
                    type="text"
                    name="country"
                    placeholder="country"
                    className="input item"
                    onChange={(e) => onChange(e)}
                />

                <button className="button item" type="submit">
                    Search
                </button>
            </form>

            <div className="title">
                {countryCovidStats
                    ? countryCovidStats.country
                    : 'Global Covid Stats'}
            </div>

            <div className="">
                {countryCovidStats.timeline
                    ? renderCountryCovidStats()
                    : 'Enter a country for localized covid data'}
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
