import React, { useEffect, useState } from 'react';

let App = () => {

    let [count, setCount] = useState(0);
    let [process, setProcess] = useState("processing")

    console.log("render was called");

    //case 1:
    //useEffect takes two argument 1-function 2-array
    //if function is passed with empty array then useEffect will act as component did mopunt 
    // will only get executed once,the component is rendered
    // useEffect(()=>{
    //   console.log("useEffect was called");
    // },[])

    //case 2:
    //if only function is passed with no array then after every render useEffect will be called
    // useEffect(()=>{
    //   console.log("useEffect Case 2 was called");
    // })


    //case 3:  


    useEffect(()=>{
      let arr = process.split("i")
      console.log(arr)
    },[process])

  return (
    <div>
      <button onClick = {()=> {
        setCount(count+1)
      }}> + </button>
      <p>{count}</p>
      <button onClick = {()=> {
        setCount(count-1)
      }}>-</button>


      <p>{process}</p>
      <button onClick = {()=>{
        setProcess("sucess");
      }}>Click Me</button>
    </div>
  );
}

export default App;
