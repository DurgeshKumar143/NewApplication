
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer'
 
// import News setProgress={this.setProgress}Items from './components/News setProgress={this.setProgress}Items';
 

export default class App extends Component {
  
  state={
    progress:0
  }
  apiKey=process.env.REACT_APP_NEWS_API
  setProgress=(progress)=>{
    this.setState({progress:progress});

  } 
  
  render() {
    return (
      <div>  
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
                  <Routes>
                    <Route path="home/" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={3} country="in" category='business'/>} />
                    <Route path="business/" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category='business'/>} />
                    <Route path="entertainment/" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category='entertainment'/>} />
                    <Route path="general/" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category='general'/>} />
                    <Route path="health/" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category='health'/>} />
                    <Route path="science/" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category='science'/>} />
                    <Route path="sport/" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category='sport'/>} />
                    <Route path="technology/" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category='technology'/>} />
                   
                </Routes>

                <Footer></Footer>
       
      




        </BrowserRouter>
        
        
       


        


       



        
         
      

      </div>
    )
  }
}

