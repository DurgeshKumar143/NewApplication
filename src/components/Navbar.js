import React from "react"
export const Navbar=()=> {
 
    return (
      <div>
        <nav className="navbar text-center fixed-top navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/business">Durgesh </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/*
       <li className="nav-item active">
        <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">About</a>
      </li>
      <li className="nav-item">
        <a className='nav-link' href="/#">Contact</a>
      </li>  */}
      {/* <li className="nav-item active"><a href="/business" className="nav-link">Home</a></li> 
      */}
      <li className="nav-item active" ><a href="/business" className="nav-link">Business</a></li>
      <li className="nav-item"><a href="/entertainment" className="nav-link">Entertainment</a></li>
      <li className="nav-item"><a href="/general" className="nav-link">General</a></li>
      <li className="nav-item"><a href="/health" className="nav-link">Health</a></li>
      <li className="nav-item"><a href="/science" className="nav-link">Science</a></li>
      <li className="nav-item"><a href="/sport" className="nav-link">Sport</a></li>
      <li className="nav-item"><a href="/technology" className="nav-link">Technology</a></li>
            
    </ul>
    
  </div>
</nav>


      </div>
    )
  }


export default Navbar