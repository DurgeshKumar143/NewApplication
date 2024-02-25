import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinners from './Spinners';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize:20,
    category:'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string, 
  }
  capitalice =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);

  }
   
constructor(props){
    super(props);
    
    this.state={
       articles:[],
       loading:false,
       page:1,
       totaleResults:0
       
      
        
    }
     document.title=`${this.capitalice(this.props.category)} -- NewsMonkey`
}


async update(){
  console.log("This is api key value",this.props.apiKey)
  this.props.setProgress(10)
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data=await fetch(url);
  this.props.setProgress(30)
  let parsedData= await data.json();
 
  this.props.setProgress(70)
  this.setState({loading: false});
   
  this.setState({articles:parsedData.articles,totaleResults:parsedData.totalResults});
  this.props.setProgress(100)

}
async  componentDidMount(){
   
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data=await fetch(url);
  let parsedData= await data.json();
  this.setState({loading: false});
   
  this.setState({articles:parsedData.articles,totaleResults:parsedData.totalResults});
  
  

}
    handlePreClick=async()=>{
  console.log('handleNextClic');
  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=68b3a0718e4247b3b21423e7639d17b7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  // this.setState({loading: true});
  // let data=await fetch(url);
  // let parsedData= await data.json();
  // this.setState({loading: false});
   
  // this.setState({
  //   page:this.state.page - 1,
  //   articles:parsedData.articles,
  
    
  // }) 
  this.setState({page:this.state.page-1});
  this.update();

}

    handleNextClick= async ()=>{
  console.log('handleNextClic');
//   if(!(this.state.page + 1 >  Math.ceil(this.state.totaleResults/this.props.pageSize))){
//     console.log("This is  a lasr next click page and there is find no isu")
     
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=68b3a0718e4247b3b21423e7639d17b7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//   this.setState({loading: true});
//   let data=await fetch(url);
//   let parsedData= await data.json();
  
//   console.log((this.state.page) + " Your stage page value");
//   console.log(parsedData)
//   this.setState({loading: false});

//   this.setState({
//     page:this.state.page + 1,
//     articles:parsedData.articles
    
//   })
  
// }
this.setState({page:this.state.page + 1});
this.update();
    }
fetchMoreData = async() => {
       
       this.setState({page: this.state.page + 1});
       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data=await fetch(url);
  let parsedData= await data.json();
  this.setState({loading: false});
   
  this.setState({articles:this.state.articles.concat(parsedData.articles),totaleResults:parsedData.totalResults,
  loading: false});
  
    };


    

  render(props) {
    console.log("Hello i am render from news file")
    return (
      <>
        <h3 className='text-warning'>Page No : {this.state.page}</h3><h2 className='my-4 text-center'>  NewsMonkey - Top   <span className='text-success'> {this.capitalice(this.props.category)}   </span> Headlines</h2>  
         {this.state.loading && <Spinners/>} 
         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totaleResults}
          loader={this.state.loading && <Spinners/>}
        >

<div className="container">
        <div className="row ">

        { this.state.articles.map((element)=>{
          return  <div className="col-lg-4  col-sm-12 col-md-6" key={element.url} ><NewsItems title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imgUrl={element.urlToImage}
          newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/></div>

        })}
             </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          
            <button type='button' disabled={(this.state.page<=1)} className="btn btn-dark" onClick={this.handlePreClick}>&larr;Previous</button>
            <button type='button' disabled={this.state.page + 1 >  Math.ceil(this.state.totaleResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          
        </div> */}
         
        
        
         </>
       
    )
  }
}
