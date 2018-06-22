import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item has-text-primary">
          <b>The Liberation League</b>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/events">
          Events
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
        <Link className="navbar-item" to="/about">
          About Us
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/tags">
          Search
        </Link>
        <Link className="navbar-item" to="/admin">
          Login
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
