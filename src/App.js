import React, { useEffect, useState } from 'react';

let App = () => {

    let [count, setCount] = useState(0);
    // let [process, setProcess] = useState("processing")

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


    // useEffect(()=>{
    //   let arr = process.split("i")
    //   console.log(arr)
    // },[process])


    //cleanUp case : 1 of useEffect
    
    // pahile baar render karne par cleanup function bass return hota hae  next time state change karne par execute hota hae pahiley cleanup function then use effect
    // useEffect(()=>{
    //   console.log("use effect of case 2 was called")
    //   return ()=>{
    //     console.log("clean up function executed")
    //   }
    // })

    //cleanup case :2 of use Effect
    //in the first render clean up function was returned and gets executed only when component get unamounted from the screen
    

    useEffect(()=>{
      console.log("case:1 of useEffect was called");
      return ()=>{
        console.log("case 2 of cleanup was called");
      }
    },[])

  return (
    <div>
      <button onClick = {()=> {
        setCount(count+1)
      }}> + </button>
      <p>{count}</p>
      <button onClick = {()=> {
        setCount(count-1)
      }}>-</button>


      {/* <p>{process}</p>
      <button onClick = {()=>{
        setProcess("sucess");
      }}>Click Me</button> */}
    </div>
  );
}

export default App;
