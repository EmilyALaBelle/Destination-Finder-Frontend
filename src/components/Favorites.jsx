import { useState } from "react"
import { useEffect } from "react"
import '../assets/Favorites.css'

export default function Favorites() {
  const [likedDestinations, setLikedDestinations] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5002/like`)
      .then(response => response.json())
      .then(data => setLikedDestinations(data))
      .catch(err => console.error(err))
  }, [])

  console.log(likedDestinations)
  const AllLikedDestinations = () => {
    return (
      <div className="background">
        {likedDestinations.map((item) => {
          return (
            <div className="destination-card" state={item} key={item._Id}>
              <h1>{item.City}, {item.State}</h1>
              <img className="image" src={item.Image} alt='' />
              <h4 className="climate-box">The Climate is: {item.Climate}</h4>
              <h4 className="terrain-box">The Terrain is: {item.Terrain}</h4>
              <h4 className="budget-box">{item.Budget}</h4>
            </div>
          )
        })} </div>
    )
  }
  return (
    <div className="head">
      <h1 className="header">Favorites</h1>
      < AllLikedDestinations/>
    </div>
  )
}
