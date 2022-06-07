import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postActivity, getAllCountries } from '../../Redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import { validate, validateForm } from './validate.jsx';

export default function CreateActivity() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const errors = {}
  const countries = useSelector((state) => state.countries)
  // const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: []
    })

    useEffect(() => {
      dispatch(postActivity)
      dispatch(getAllCountries)
    }, [dispatch])
  
  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    var errors = validate({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleDifficulty = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      difficulty: e.target.value
    })
  }

  function handleDuration(e){
    setInput({
      ...input,
      duration: e.target.value
    })
  }

  function handleSeason(e){
    setInput({
      ...input,
      season: e.target.value
    })
  }

  const handleCountry = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      countries: [...input.countries, e.target.value]
    })
  }
  
  const handleDelete = (el) => {
    setInput({
      ...input,
      countries: input.countries.filter((co) => co !== el )
    })
  }

    const handleSubmit = (e) => {
      e.preventDefault();
      var errors = validateForm({
        ...input,
        [e.target.name]: e.target.value
      });
      if(!errors){
      dispatch(postActivity(input));
      // alert(errors === {}?'Activity created!': errors.values())
      setInput({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
      })
      // navigate('/home')
    } 
    alert(errors ? Object.values(errors) : 'Activity created!')    
    }

  return (
    <React.Fragment>
      <Link to={'/home'}
      ><button>Volver</button>
      </Link>
    <div>CREATE ACTIVITY</div>
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="">Name:</label>
        <input
        type={'text'}
        name = {'name'}
        value = {input.name}
        required
        onChange={(e) => handleChange(e)}
        />
      </div>

      <div>
        <label>Difficulty:</label>
        <select onChange={(e) => handleDifficulty(e)}>
        {/* <option value={'difficulty'} key={'difficulty'}>Difficulty...</option> */}
        <option ></option>
        <option value={1} key={'1'}>1</option>
        <option value={2} key={'2'}>2</option>
        <option value={3} key={'3'}>3</option>
        <option value={4} key={'4'}>4</option>
        <option value={5} key={'5'}>5</option>
        </select>        
      </div>      
      
      <div>
        <label>Duration:</label>
        <select onChange={(e) => handleDuration(e)}>
        <option value={'duration'} key={'duration'}>Duration...</option>
        <option value={'1hr'} key={'1hr'}>1hr</option>
        <option value={'2hs'} key={'2hs'}>2hs</option>
        <option value={'3hs'} key={'3hs'}>3hs</option>
        <option value={'4hs'} key={'4hs'}>4hs</option>
        <option value={'5hs'} key={'5hs'}>5hs</option>
        <option value={'6hs'} key={'6hs'}>6hs</option>
        <option value={'7hs'} key={'7hs'}>7hs</option>
        <option value={'8hs'} key={'8hs'}>8hs</option>
        <option value={'9hs'} key={'9hs'}>9hs</option>
        <option value={'10hs'} key={'10hs'}>10hs</option>
        <option value={'11hs'} key={'11hs'}>11hs</option>
        <option value={'12hs'} key={'12hs'}>12hs</option>
        </select>
      </div>
      <div>
        <label>Season:</label>
        <select onChange={(e) => handleSeason(e)}>
        <option value={'season'} key={'season'}>Season...</option>
        <option value={'Summer'} key={'Summer'}>Summer</option>
        <option value={'Fall'} key={'Fall'}>Fall</option>
        <option value={'Winter'} key={'Winter'}>Winter</option>
        <option value={'Spring'} key={'Spring'}>Spring</option>     
        </select>
      </div>
      <div>
      <label>Countries:</label>
        <select onChange={(e) => handleCountry(e)}>
          {countries.map((country) => (
            <option value={country.id} key={country.id}>{country.name}</option>
          ))}
        </select> 
        {/* <button type="submit">CREATE</button> */}
      {errors.name || !input.name? <button type="submit" disabled={true}>CREATE</button>:
  <button type="submit">CREATE</button>}
        {errors.name && (
              <p>{errors.name}</p>
              )}        
    <div>
    {
      input.countries.map(el =>
        <div>
          <p>{el}</p>
          <button onClick={()=>handleDelete(el)}>x</button>
        </div>
        )
      }
    </div>
    </div>
      {/* <ul><li>{input.countries.map(country => country + " ,")}</li></ul> */}
    </form>
    </React.Fragment>
  )
}
