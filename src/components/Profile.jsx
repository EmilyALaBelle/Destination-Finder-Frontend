import { Link } from "react-router-dom"
import '../assets/Profile.css'

export default function Profile() {
  return (
    <div className="profile-card">
      <h1 className="profile-heading">Profile</h1>
      <div className="account-button">
        <Link to={"/account"}>
          <button className="button-51">
            Account
          </button>
        </Link>
      </div>
      <br />
      <div className="favorite-button">
        <Link to={"/favorites"} style={{textDecoration:'none', color:'Black'}}>
     <button className="button-51">Favorites</button>
        </Link>
      </div>
      <br />
      <div className="login-button">
        <Link to={"/login"}>
          <button className="button-49">
            Login
          </button>
        </Link>
      </div>
      <br />
      <div className="signup-button">
        <Link to={"/signup"}>
          <button className="button-51">
            Signup
          </button>
        </Link>
      </div>
    </div>
  )
}