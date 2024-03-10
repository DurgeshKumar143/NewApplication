
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer'
 
// import News setProgress={setProgress}Items from './components/News setProgress={setProgress}Items';
 

 const App =()=> {
  const [progress,setProgress]=useState(0)
  
   
 const  apiKey=process.env.REACT_APP_NEWS_API
  
  
  
    return (
      <div>  
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
                  <Routes>
                    <Route path="home/" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={3} country="in" category='business'/>} />
                    <Route path="business/" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='business'/>} />
                    <Route path="entertainment/" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='entertainment'/>} />
                    <Route path="general/" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='general'/>} />
                    <Route path="health/" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='health'/>} />
                    <Route path="science/" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='science'/>} />
                    <Route path="sport/" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='sport'/>} />
                    <Route path="technology/" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='technology'/>} />
                   
                </Routes>

                <Footer></Footer>
       
      




        </BrowserRouter>
        
        
       


        


       



        
         
      

      </div>
    )
  }


export default App;

