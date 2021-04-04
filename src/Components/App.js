import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchCountry } from '../actions'

const App = ({ fetchCountry }) => {
    // set up some local state to manage the inputs
    const [formData, setFormData] = useState({
        country: '',
        province: '',
    })

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
        </div>
    )
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, { fetchCountry })(App)
