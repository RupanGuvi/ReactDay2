import React from 'react';

const CompB = ({arr}) => {
   
    return (
        <div>
            <h1>Component B</h1>
            {arr.map((ele,index)=>{
                return(
                    <div key={index}>
                        <h1>{ele}</h1>
                    </div>
                )
            })}
        </div>
    );
};

export default CompB;