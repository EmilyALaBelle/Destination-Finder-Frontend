import {useEffect, useState} from "react"
import '../assets/List.css'
// import { HeartTwoTone } from "@ant-design/icons";
// import {Card} from 'antd'

export default function Destinations() {
const [destination, setDestination] = useState([])
    
    useEffect(() => {
   fetch(`https://practice-final-2-el.web.app/destinations`)
   //   fetch(`http://127.0.0.1:5002/destinations`)
      .then(res => res.json())
      .then(data => setDestination(data))
      .catch(err => console.error(err))
    }, [])

    console.log(destination)

//     const handleLikeClick = (values) => {
//       console.log("values ->", values)
//       fetch(`http://localhost:5002/like/${destination._Id}`, {
//         method: 'PATCH', 
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(values)
//       })
// .then(response => response.json())
// .then(setDestination)
// .catch(alert)
//     }
// console.log("destination ->", destination)
    // const Heart = () => {
    //   return destinations.like ? <><HeartTwoTone twoToneColor="#eb2f96" onClick={handleLikeClick}/>{postMessage.destination.toLocaleString()} Likes</>:< HeartTwoTone twoToneColor="#bbb" onClick={handleLikeClick}/>
    // }

    const AllDestinations = () => {
      return (
        <div className="background">
          {destination.map((item, index) => {
      return (
        <>
        
        <div  className="destination-card" state={item} key={item._Id} >
          <h1>{item.City}, {item.State}</h1>
        <img className="image" src={item.Image} alt=''/>
        <h4 className="climate-box">The Climate is: {item.Climate}</h4>
        <h4 className="terrain-box">The Terrain is: {item.Terrain}</h4>
        <h4 className="budget-box">{item.Budget}</h4>
        </div>
     
        </>

      )
    })} </div>
    )
    }
return (
  <div className="head">
    <h1 className="header">Destination List</h1>
    <AllDestinations />
    {/* <button onClick={handleLikeClick}>Button</button> */}
  </div>
)
}