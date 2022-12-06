import { useState } from "react"
import { HeartTwoTone } from "@ant-design/icons"

export default function Favorites(){

const [destinations, setDestinations] = useState()

  const handleLikeClick = () => {
    fetch(`http://localhost:5002/like/${destinations._Id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(destinations)
    })
      .then(response => response.json())
      .then(data => setDestinations(data))
      .catch(alert)
  }

  const Heart = () => {
    return destinations.like ? <><HeartTwoTone twoToneColor="#eb2f96" onClick={handleLikeClick} />{postMessage.destination.toLocaleString()} Likes</> : < HeartTwoTone twoToneColor="#bbb" onClick={handleLikeClick} />
  }
}