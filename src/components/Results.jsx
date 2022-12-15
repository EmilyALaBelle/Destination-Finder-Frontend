import { useLocation } from "react-router-dom";
import '../assets/Results.css'
import { Card } from "antd";

export default function Results() {
  const { state } = useLocation();
  return (
    <div className="head">
      <h1 className="header">Results</h1>
      {state.map(destination => {
        return (
          <Card className="destination-card">


              <div className="city-state-box">
                {destination.City},
                {destination.State}
              </div>

              <img className="image" src={destination.Image} alt="" />

              <div className="climate-box">
                Climate: {destination.Climate}
              </div>

              <div className="terrain-box">
                Terrain: {destination.Terrain.toString().split(",   ")}
              </div>

              <div className="budget-box">
                Budget: {destination.Budget}
              </div>
          </Card>
        )
      })}
    </div>
  )
}