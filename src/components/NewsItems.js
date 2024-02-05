import React, { Component } from 'react'
import './error.png'

export default class NewsItems extends Component {
    
  render(props) {
   let {title, description,imgUrl,newsurl,author,date,source}=this.props
    return (
       
          <div className='my-3'>
             
         <div className="card " >
         <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:'90%', zindex:'1'}}> {source}</span>
         
                <img src={!imgUrl?"https://www.reuters.com/resizer/o2cAL5yxut-bIa6J00HSGoESNkU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZWG43BE2WRIQHPB3OE2CXNXJSI.jpg":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}......</p>
                <p className='card-text'><small className='text-muted text-left'>By <strong> {!author?"Unknow":author} </strong> on   <strong>{new Date(date).toGMTString()}</strong></small></p>
                <a href={newsurl} target='_blank' rel="noreferrer"  className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
        </div>
      
    )
  }
}
