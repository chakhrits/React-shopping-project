import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'

const AppHeader = ({ currentUser, dispatch }) => (
  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://iamnew.dev" target="_blank">
        <img src={logo} alt="Iamnew LOGO" width="116" height="64" />
      </a>
      <div className="navbar-burger burger" data-target="navbarWithTransparent">
        <span />
        <span />
        <span />
      </div>
    </div>
    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-end">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <div className="navbar-item">
          <p className="control">
            <Link className="button is-light" to="/login">
              <span className="icon">
                <i className="fas fa-user" />
              </span>
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </nav>
)

export default AppHeader
