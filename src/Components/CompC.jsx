import React from 'react';

const CompC = ({obj}) => {
    return (
        <div>
            <h1>Component C</h1>
            <h2>Name:{obj.name}</h2>
            <h2>Age: {obj.age}</h2>
        </div>
    );
};

export default CompC;