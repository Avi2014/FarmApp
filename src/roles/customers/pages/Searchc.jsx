import React from 'react'
import Navbar from '../CustomerComponents/NavbarC'
import './searchC.css'

const Searchc = () => {
  return (
    <div><Navbar />
    <div className='search-container'>
    <input type="text" className='search-input' placeholder='Search users'/>
    <button className="searchbtn">Search</button>
    </div>
    </div>
  )
}

export default Searchc