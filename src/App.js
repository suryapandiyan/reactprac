// function Header({course}){
//   return(
//     <h1>{course} </h1>
//   )
// }
// function Content({part},{exercises}){
//   return(
//     <div>
//     <p>{part}</p>
//     <p>{exercises}</p>

// import { useState } from "react";

    
//     </div>
//   )
// }
// function Total(){
//   const exercises1=10;
//   const exercises2=7;
//   const exercises3=14;
//   return(
//     <div>
//       <p>Number of Exercises:{exercises1+exercises2+exercises3}</p>
//     </div>
//   )
// }
// function App() {
//  const course='Half stack application development';
//  const part1='Fundamental of React';
//  const exercises1=10;
//  const part2='Using props to pass data';
//   const exercises2=7;
//   const part3='State of Component';
//   const exercises3=14;

//   return (
//      <div> 
//       <Header course={course} />
//       <Content part={part1} exercises={exercises1}/>
//       <Content part={part2} exercises={exercises2}/>
//       <Content part={part3} exercises={exercises3}/>
//       <Total />
//      </div>
    
      
//   )
// }

// export default App;
function Statistics({good,neutral,bad})
{
return(
  <div>
    <h1>Statistics</h1>
        <p>good {good}</p>
        <p>neutral{neutral}</p>
        <p>bad {bad}</p>
        <p>all{good+neutral+bad}</p>
        <p>average{(good+neutral+bad)/3}</p>
        <p>positive{((good)/(good+neutral+bad) *100)} %</p>  
  </div>
)
}
// function button(){
//   return(
//     <button onClick={()=>setGood(good+1)}>good</button>
//          <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
//          <button onClick={()=>setBad(bad+1)}>bad</button>

//   )
// }
function header(){
  return(
    <h1>Give Feedback</h1>
  )
  
}
function App() {
 const [good,setGood]=useState(0) 
 const [neutral,setNeutral]=useState(0)
 const [bad,setBad]=useState(0)
  return (
    <div> 
        <div>
         <header />
        <Statistics good={good} bad={bad} neutral={neutral}/>
        </div>

    </div>
  )
}
export default App;