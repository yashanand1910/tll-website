import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="The Liberation League" />
    <Navbar />
    <div>{children()}</div>
    <footer><small>Developed by <a href="http://yashanand.work" target="_blank">Yash Anand</a></small></footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
