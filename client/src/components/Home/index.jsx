import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getAllCountries,filterByContinent, orderByName, orderByPopulation, getActivity } from '../../Redux/Action';
import { Link } from 'react-router-dom';
import CountryCard from '../CountryCard';
import Paginado from '../Paginado';
import SearchBar from '../SearchBar'
import './index.css'

export default function Home() {
  const dispatch = useDispatch();

  const [order, setOrder] = useState('');

  const allCountries = useSelector((state) => state.countries);

  // const { countries } = useSelector((state)=> {return state})

  const [currentPage, setCurrentPage] = useState(1);

  let countriesPerPage = 0;

  if (currentPage === 1) {countriesPerPage = 9}

  if (currentPage >= 2) {countriesPerPage = 10}

  const indexOfLastCountry = currentPage * countriesPerPage;

  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() =>{
    dispatch(getActivity)
    dispatch(getAllCountries())
    }, [dispatch])

  function handleClick(e){
    e.preventDefault();
    dispatch(getAllCountries())
  }

  function handleFilterContinent(e){
    e.preventDefault();
    dispatch(filterByContinent(e.target.value))
  }

  function handleOrderByName (e){
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`)
  }

  function handleOrderByPopulation (e){
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`)
  }

  return (
    <div className='Home'>      
      <Link to={'/home/activities'}>CREATE ACTIVITY</Link>
      <h1>COUNTRIES</h1>
      <SearchBar/>
      <button onClick={(e)=> {handleClick(e)}}>
        all countries
      </button>
      <div>
        <select onChange={(e) => handleOrderByName(e)}>
          <option value="asc" key='asc'>A to Z</option>
          <option value="desc" key='desc'>Z to A</option>
        </select>
        <select onChange={(e) => handleOrderByPopulation(e)}>
          <option value="population asc" key='population asc'>population asc</option>
          <option value="population desc" key='population desc' >population desc</option>
        </select>
        <select onChange={(e) => handleFilterContinent(e)}>
          <option value="All" key='All'>All</option>
          <option value="Africa" key='Africa'>Africa</option>
          <option value="Antarctic" key='Antarctic'>Antarctic</option>
          <option value="Americas" key='Americas'>America</option>
          <option value="Asia" key='Asia'>Asia</option>
          <option value="Europe" key='Europe'>Europe</option>
          <option value="Oceania" key='Oceania'>Oceania</option>
        </select>
      </div>
      
      <Paginado
      countriesPerPage={countriesPerPage}
      allCountries={allCountries.length}
      paginado= {paginado}
      />
      {currentCountries?.map((c)=>{
        return(
          <div>
            <Link to={'/home/details/' + c.id}>
              <CountryCard name={c.name} image={c.image} continent={c.continent} key={c.id}/>
            </Link>
          </div>
        );
      })}
    </div>
  )
}
