import { useState, useEffect } from "react"
import Destination from "./DestinationCard"
import '../assets/List.css'

export default function Destinations() {
  const [destination, setDestination] = useState([])
  useEffect(() => {
   fetch(`https://practice-final-2-el.web.app/destinations`)
  //  fetch(`http://127.0.0.1:5002/destinations`)
      .then(res => res.json())
      .then(data => setDestination(data))
      .catch(err => console.error(err))
  }, [setDestination])
  console.log("destination -> ->", destination)
  return (
    <section>
      {!destination
        ? <p>Loading...</p>
        : destination.map(destination => (
          <Destination setDestination={setDestination} destination={destination} key={destination._id}></Destination>
        ))}
    </section>
  )
}
