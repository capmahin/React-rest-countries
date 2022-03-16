import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h1>Country Name:{props.name}</h1>
            <p>Population:{props.population}</p>
        </div>
    );
};

export default Country;