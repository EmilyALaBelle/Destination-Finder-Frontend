import { HeartTwoTone } from "@ant-design/icons";
import { Card } from 'antd'
import '../assets/List.css'

export default function Destination({ destination, setDestination }) {
  const handleLikeClick = () => {
//   fetch(`http://localhost:5002/like/${destination._id}`, {
  fetch(`https://practice-final-2-el.web.app/like/${destination._id}`, {
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
    return destination.liked === true ? <><HeartTwoTone twoToneColor="#eb2f96" onClick={handleLikeClick} />{destination.liked}</> : < HeartTwoTone twoToneColor="#bbb" onClick={handleLikeClick} />
  }
  return (
    <Card className="destination-card"
      hoverable
      actions={[
        <Heart />
      ]}>

      <div >
        <h1 >{destination.City}, {destination.State}</h1>
        <img className="image" alt="" src={destination.Image} />
        <h4 className="climate-box">The Climate is: {destination.Climate}</h4>
        <h4 className="terrain-box">The Terrain is: {destination.Terrain}</h4>
        <h4 className="budget-box">{destination.Budget}</h4>
      </div>
    </Card>
  )
}