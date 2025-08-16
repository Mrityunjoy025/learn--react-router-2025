import React from 'react'
import { Link } from "react-router-dom"



export default function Vans(){
const [vanData, setVanData] = React.useState([])

React.useEffect(() => {
  fetch("/api/vans")
    .then(res => res.json())
    .then(data => setVanData(data.vans))
}, [])
console.log(vanData)

const vanElements = vanData.map(vans => (
  <div key={vans.id} className="van-tile">
       <Link to={`/vans/${vans.id}`}>
        <img src={vans.imageUrl} />
           <div className="van-info">
              <h3>{vans.name}</h3>
              <p>${vans.price}<span>/day</span></p>
           </div>
        <i className={`van-type ${vans.type} selected`}>{vans.type}</i>
     </Link>
  </div>
       ))
    
    return (
     <div className="van-list-container">
      <h1>Explore our van options </h1>
       <div className="van-list">
        {vanElements}
      </div>
     </div> 
     )
}