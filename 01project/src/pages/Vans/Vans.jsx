import React from 'react'
import { Link, useSearchParams  } from "react-router-dom"
import { getVans } from "../../../api"



export default function Vans(){
const [vanData, setVanData] = React.useState([])
const [searchParams, setSearchParams]= useSearchParams()
const [loading, setLoading] = React.useState(false)
const [error, setError] = React.useState(null)

const typeFilter = searchParams.get("type")

React.useEffect(() => {
  async function loadVans(){
   setLoading(true)
   try{
   const data = await getVans()
   setVanData(data)
   } catch(err){
    setError
   } finally {
    setLoading(false)
    }
}
 
  loadVans()
}, [])

const displayVans = typeFilter 
? vanData.filter(vans => vans.type.toLowerCase() === typeFilter)
: vanData


const vanElements = displayVans.map(vans => (
  <div key={vans.id} className="van-tile">
       <Link 
       to={vans.id} 
       state=
       {{
         search: `?${searchParams.toString()}`,
         type: typeFilter
         }}
         >
        <img src={vans.imageUrl} />
           <div className="van-info">
              <h3>{vans.name}</h3>
              <p>${vans.price}<span>/day</span></p>
           </div>
        <i className={`van-type ${vans.type} selected`}>{vans.type}</i>
     </Link>
  </div>
       ))
   function handleFilterChange(key, value){
      setSearchParams(prevParams => {
         if(value === null){
            prevParams.delete(key)
         } else {
            prevParams.set(key, value)
         }
         return prevParams
      })
   }
    
   if(loading){
      return <h1 aria-live ="polite">Loading...</h1>
   }

   if(error){
      return <h1 aria-live="assertive">There was an error: {error.message}</h1>
   }


     return (
     <div className="van-list-container">
      <h1>Explore our van options </h1>
      <div className="van-list-filter-buttons">
       <button 
       onClick={() => handleFilterChange("type", "simple")}
       className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
       >Simple</button>
      <button 
       onClick={() => handleFilterChange("type", "luxury")}
       className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
      >Luxury</button>
      <button 
       onClick={() => handleFilterChange("type", "rugged")}
       className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
      >Rugged</button>
      {typeFilter ? (<button 
       onClick={() => handleFilterChange("type", null)}
       className="van-type clear-filter"
      >Clear Filter</button>) : null}   
      </div>
       <div className="van-list">
        {vanElements}
      </div>
     </div> 
     )
}

/* 
<Link
to="?type=simple"
className="van-type simple"
>Simple</Link>
<Link
to="?type=luxury"
className="van-type luxury"
>Luxury</Link>
<Link 
to="?type=rugged"
className="van-type rugged"
>Rugged</Link>
<Link 
to="." 
className="van-type clear-filters" 
>Clear</Link>
*/
/*
<button 
className="van-type simple"
onClick={() => setSearchParams({type: "simple"})}
>Simple</button>
<button 
className="van-type luxury"
onClick={() => setSearchParams({type: "luxury"})}
>Luxury</button>
<button 
className="van-type rugged"
onClick={() => setSearchParams({type: "rugged"})}
>Rugged</button>
{searchParams ? (<button 
className="van-type clear-filters"
onClick={() => setSearchParams({})}
>Clear filter </button>) :  null }
*/