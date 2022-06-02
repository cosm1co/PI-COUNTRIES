import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({name, continent, image, id,}) {
  return (
    <div>
      <img src={image} alt="not found" width='300px' height='200px'/>
      <h3>{name}</h3>
      <h5>{continent}</h5>
      <Link to = {`/home/details/${id}`} />
    </div>
  );
}
