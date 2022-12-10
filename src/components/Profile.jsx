import { Link } from "react-router-dom"
import '../assets/Profile.css'

export default function Profile() {
  return (
    <div className="profile-card">
      <h1 className="profile-heading">Profile</h1>
      <div className="account-button">
        <Link to={"/account"} style={{ textDecoration: 'none', color: 'Black' }}>
          <button className="button-46">
            Account
          </button>
        </Link>
      </div>
      <br />
      <div className="favorite-button">
        <Link to={"/favorites"} style={{ textDecoration: 'none', color: 'Black' }}>
          <button className="button-46">Favorites</button>
        </Link>
      </div>

      <div className="login-button">
        <Link to={"/login"} style={{ textDecoration: 'none', color: 'Black' }}>
          <button className="button-46">
            Login
          </button>
        </Link>
      </div>
      <br />
      <div className="signup-button">
        <Link to={"/signup"} style={{ textDecoration: 'none', color: 'Black' }}>
          <button className="button-46">
            Signup
          </button>
        </Link>
      </div>
    </div>
  )
}