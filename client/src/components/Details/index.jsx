import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCountryById } from '../../Redux/Action'
import { useEffect } from 'react'

export default function Details() {
  const dispatch = useDispatch();
  const {id} = useParams();
  
  const countryDetail = useSelector((state) => state.countryId)
  useEffect(()=>{
    dispatch(getCountryById(id))
  },[dispatch,id])

  return (
    <div>
      {
        countryDetail?
        <div>
          <h1>{countryDetail.name}</h1>
          <img src={countryDetail.image} alt="not found" width='300px' height='200px'/>
          <h2>{countryDetail.continent}</h2>
          <h2>{countryDetail.capital}</h2>
          <h3>Area: {countryDetail.area}</h3>
          <h4>Subregion: {countryDetail.subregion}</h4>
          <h4>Population: {countryDetail.population}</h4>
          <h3>Id: {countryDetail.id}</h3>
          <div>
            {
              countryDetail.activities?.map((c) =>{
                return(
                  <div>
                    <h5>Activities: {c.name}</h5>
                    <h5>Difficulty: {c.difficulty}</h5>
                    <h5>Duration: {c.duration}</h5>
                    <h5>Season: {c.season}</h5>
                  </div>
                )
              })
            }
          </div>
          <Link to='/home'><button>Back</button></Link>
        </div>:
        <p>Loading...</p>
      }
      </div>
      )
}
