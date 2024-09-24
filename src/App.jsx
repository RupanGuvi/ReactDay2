import React from 'react';
import CompB from './Components/CompB';
import CompA from './Components/CompA';
import CompC from './Components/CompC';
import CompD from './Components/CompD';
//import part

const App = () => {
    //javascript part
    let a = 10;
   const arr = [1,2,3,4,5]
   const obj = {name:"FSD",age:25}
   const arrobj = [
    {id:1,name:"john",role:"FSD"},
    {id:2,name:"doe",role:"UI/UX"},
    {id:1,name:"adam",role:"Tester"},
]
    return (
        //jsx part
        <div>
            
            <h1>App Component</h1>
            <h2>The value of a in app component is : {a}</h2>
            <CompA a={a} />
             <CompB arr={arr}/>
            <CompC  obj={obj}/>
            <CompD arrobj={arrobj} />
        </div>
    );
};
//export part
export default App;