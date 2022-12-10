import { useState } from "react"
import { useEffect } from "react"
import '../assets/Favorites.css'
import Favorites from "./FavoritesCard"

export default function Favorite() {
  const [destination, setDestination] = useState([])

  useEffect(() => {
    // fetch(`http://localhost:5002/like`)
    fetch(`https://practice-final-2-el.web.app/like`)
      .then(response => response.json())
      .then(data => setDestination(data))
      .catch(err => console.error(err))
  }, [setDestination])

  console.log(destination)
  return (
    <section>

      {!destination
        ? <p>Loading...</p>
        : destination.map(destination => (
          <Favorites setDestination={setDestination} destination={destination} key={destination._id}></Favorites>
        ))}
    </section>
  )
}

