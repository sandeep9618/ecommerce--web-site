import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <div>
          <Link to="/" className="link-item">
            Home
          </Link>
          <Link to="/products" className="link-item">
            Products
          </Link>
          <Link to="/cart" className="link-item">
            Cart
          </Link>
          <button type="button" className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    )
  }
}

export default Header
