import React from 'react';

const CompD = ({arrobj}) => {
    return (
        <div>
            <h1>Component D</h1>
            {arrobj.map((ele,index)=>{
                return(
                    <div key={index}>
                      <h1>{ele.id}</h1>
                      <h1>{ele.name}</h1>
                      <h1>{ele.role}</h1>
                    </div>
                )
            })}
        </div>
    );
};

export default CompD;