import '../assets/Navbar.css'
import { Link } from "react-router-dom"
import { Layout } from 'antd'

export default function Navbar() {
  return (
    <Layout >
      <div className='navbar'>
        <Link to={'./'} style={{ textDecoration: "none", color: "white", fontSize: "20px" }}>
          Home
        </Link>

        <Link to={'./quiz'} style={{ textDecoration: "none", color: "white", fontSize: "20px" }}>
          Quiz
        </Link>

        <Link to={'./destinationList'} style={{ textDecoration: "none", color: "white", fontSize: "px" }}>
          Destinations
        </Link>

        <Link to={"./profile"} style={{ textDecoration: "none", color: "white", fontSize: "20px"}}>
          Profile
        </Link>
      </div>
    </Layout>
  )
}