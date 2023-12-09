import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=()=> {

    return (
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link to={'/'} style={{color:'#0dcaf0'}} className="navbar-brand" >NewZap</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={'/'} className="nav-link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/health'} className="nav-link">Health</Link>
        </li>
        <li className="nav-item">
          <Link to={'/science'} className="nav-link">Science</Link>
        </li>
        <li className="nav-item">
          <Link to={'/sports'} className="nav-link">Sports</Link>
        </li>
        <li className="nav-item">
          <Link to={'/technology'} className="nav-link">Technology</Link>
        </li>
        <li className="nav-item">
          <Link to={'/entertainment'} className="nav-link ">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link to={'/business'} className="nav-link">Business</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    )
  }

export default Navbar;