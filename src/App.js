 //without react router
 import React, { useState } from 'react';
 import{Link,Route,BrowserRouter as Router, Routes}from 'react-router-dom';
 function Home(){
  return(
    <div>
        <h1>Home Page</h1> 
    </div>
    
    
  )
 }
 function About(){
  return(
    <div>
      <h1> About Page</h1>
    </div>
  )
 }
 function User(){
  return(
    <div>
          <h1>User Page</h1>
    </div>
    
  )
 }
 function Contact(){
  return(
    <div>
      <h1>
      Contact Page
      </h1>
    </div>
    )
 }
 
 export default function App() {
  const [page,setPage]= useState('home');
  const content= ()=> {
    if(page==='Home'){
      return<Home/>;
    }else if(page==='About'){
      return<About/>
    }
    else if(page==='User'){
      return<User/>
    }
    else if(page==='Contact'){
      return<Contact/>
    }
    

  }
  const toPage= (page)=>(event)=>{
  event.preventDefault();
  setPage(page);
}
  const padding= {
    padding:10
  };
   return (
     <div>
      <Router>
     <div>
       <Link to='/' style={padding}>Home</Link>
       <Link to='/About' style={padding}>About</Link> 
       <Link to='/User'  style={padding}>User</Link>    
       <Link to='/Contact' style={padding}>Contact</Link> 
       <Routes>
      <Route  path='/About' element={<About/>}/>
      <Route path='/User' element={<User/>}/>

      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/' element={<Home/>}/>

     </Routes>
     
     </div>
     </Router>
       
      {content ()}
     </div>
   )
 }
  