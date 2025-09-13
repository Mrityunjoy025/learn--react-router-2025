import React from "react"
import { Link, useParams, useLocation  } from "react-router-dom"

export default function vanDetail(){
   const params = useParams()
   const location = useLocation()
   const [vanData, setVanData] = React.useState(null)
   
   React.useEffect(()=>{
   fetch(`/api/vans/${params.id}`)
    .then(res => res.json())
    .then(data => setVanData(data.vans))
    },[params.id])
    console.log(location)

   const search = location.state?.search || ""
   const type = location.state?.type || "all"
   
   return (
    <div className="van-detail-container">
      <Link
      to={`..${search}`}
      relative="path"
      className="back-button"
      >&larr; <span>Back to {`${type}`} vans</span></Link>
      {vanData ? (
         <div className="van-detail">
            <img src={vanData.imageUrl}  />
            <i className={`van-type ${vanData.type} selected`}>{vanData.type}</i>
            <h2>{vanData.name}</h2>
            <p className="van-price"><span>${vanData.price}</span>/day</p>
            <p>{vanData.description}</p>
            <button className="link-button">Rent this van</button>
         </div>
         ) : <h2>Loading...</h2>}
    </div>
   )
}

