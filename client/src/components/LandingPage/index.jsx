import React from 'react'
import { Link } from 'react-router-dom' 
import './index.css'

export default function LandingPage() {
  return (
    <div className='Landing'>
      <h1>WELCOME TO THE WORLD</h1>
      <Link to ='/home' >
        <button>paises</button>
      </Link>
    </div>
  )
}

