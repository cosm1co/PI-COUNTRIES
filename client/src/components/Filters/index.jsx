// import React from 'react'
// import { orderByName, orderByPopulation, filterByContinent, getAllCountries } from '../../Redux/Action';
// import {useDispatch, useEffect} from 'react-redux'

// export default function Filters(){

//   const dispatch = useDispatch();
  
//   useEffect(() =>{
//     dispatch(getActivity)
//     dispatch(getAllCountries())
//     }, [dispatch])
  
//   function handleFilterContinent(e){
//     e.preventDefault();
//     dispatch(filterByContinent(e.target.value))
//   }
  
//   function handleOrderByName (e){
//     e.preventDefault();
//     dispatch(orderByName(e.target.value));
//     setCurrentPage(1);
//     setOrder(`Ordered ${e.target.value}`)
//   }
  
//   function handleOrderByPopulation (e){
//     e.preventDefault();
//     dispatch(orderByPopulation(e.target.value));
//     setCurrentPage(1);
//     setOrder(`Ordered ${e.target.value}`)
//   }
//   <div>
//   <select onChange={(e) => handleOrderByName(e)}>
//     <option value="asc" key='asc'>A to Z</option>
//     <option value="desc" key='desc'>Z to A</option>
//   </select>
//   <select onChange={(e) => handleOrderByPopulation(e)}>
//     <option value="population asc" key='population asc'>population asc</option>
//     <option value="population desc" key='population desc' >population desc</option>
//   </select>
//   <select onChange={(e) => handleFilterContinent(e)}>
//     <option value="All" key='All'>All</option>
//     <option value="Africa" key='Africa'>Africa</option>
//     <option value="Antarctic" key='Antarctic'>Antarctic</option>
//     <option value="Americas" key='Americas'>America</option>
//     <option value="Asia" key='Asia'>Asia</option>
//     <option value="Europe" key='Europe'>Europe</option>
//     <option value="Oceania" key='Oceania'>Oceania</option>
//   </select>        
// </div>
// }