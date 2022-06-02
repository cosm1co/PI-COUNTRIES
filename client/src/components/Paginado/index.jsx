import React from 'react'

export default function Paginado({countriesPerPage, allCountries, paginado}) {
    const pageNumbers = []
    for (let i = 0; i < Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i+1)        
    }
    return (
        <nav>
            <div>
                {pageNumbers?.map(number => (
                    
                    <button onClick={()=> paginado(number)}>{number}</button>
                    
                ))}
            </div>
        </nav>
    )
}
