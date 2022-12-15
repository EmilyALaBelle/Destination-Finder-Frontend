import { HeartTwoTone } from "@ant-design/icons";
import { Card } from 'antd'
import '../assets/Favorites.css'

export default function Favorites({ destination, setDestination }) {
  const handleUnlikeClick = () => {
   //   fetch(`http://localhost:5002/unlike/${destination._id}`, {
   fetch(`https://practice-final-2-el.web.app/unlike/${destination._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setDestination(data))
      .catch(alert)
  }
  console.log(destination)
  const Heart = () => {
    return destination.liked === true ? <><HeartTwoTone twoToneColor="#eb2f96" onClick={handleUnlikeClick} />{destination.liked}</> : < HeartTwoTone twoToneColor="#bbb" onClick={handleUnlikeClick} />
  }
  return (
    <Card className="destination-card"
      hoverable
      actions={[
        <Heart />
      ]} >
      <div >
        <h1 >{destination.City}, {destination.State}</h1>
        <img className="image" alt="" src={destination.Image} />
        <h4 className="climate-box">The Climate is: {destination.Climate}</h4>
        <h4 className="terrain-box">The Terrain is: {destination.Terrain.toString().split(",   ")}</h4>
        <h4 className="budget-box">{destination.Budget}</h4>
      </div>
    </Card>
  )
}
