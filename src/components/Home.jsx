import { Link } from "react-router-dom"
import { Button } from "antd"
import '../assets/Home.css'

export default function Home() {
  return (
    <div>
      <header className="hero-container"></header>
      <h1 className="call-action">Find Your Perfect Destination</h1>
      <div className="button-container">
        <Link to="/quiz" style={{ textDecoration: "none" }}>
          <Button className="button-6">Take Our Quiz</Button>
        </Link>
      </div>
    </div>
  )
}