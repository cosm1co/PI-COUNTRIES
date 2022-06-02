import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryByName } from '../../Redux/Action';
import './index.css'

export default function SearchBar() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
  }

  // function handleSubmit(e){
  //   e.preventDefault();
  //   if(search !== ''){
  //   dispatch(getCountryByName(search))
  //   setSearch('')
  //   setOrder(`Ordenado: ${e.target.value}`)
  //   } else {
  //     alert('Please enter a valid country')
  //   }
  // }

  function handleSubmit(e){
    dispatch(getCountryByName(name))
    setName('')
  }

  return (
    <div>
      <input
      type = "text"
      placeholder='Search...'
      onChange={(e)=>handleInputChange(e)}
      value = {name}
      className='searchImput'
      />
      <button type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
    </div>
  )
}
