import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    return (
        <div className='country'>
            <h1>Country Name:{props.country.name.common}</h1>
            <p>Population:{props.country.population}</p>
            <p><small>Area:{props.country.area}</small></p>
            <p><small>Region:{props.country.region}</small></p>
        </div>
    );
};

export default Country;