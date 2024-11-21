import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../CustomerComponents/NavbarC'



const Farmer = () => {
  return (
    <div>
      <Navbar />
    
    {/* <nav className="navside">
        <div id='heading'>
        <h1 className='font-extrabold text-4xl'>Angkor</h1>
        </div>
        <ul className='p-4' id='navholder'> 
        <li className='navig'><i class="fa-solid fa-house p-1"></i><Link to="/customer/home">Home</Link></li>
        <li className='navig'><i class="fa-solid fa-user-tie p-1"></i><Link to="/customer/profile">Profile</Link></li>
        <li className='navig'><i class="fa-solid fa-money-bill-transfer"></i><Link to="/customer/transactions">Transactions</Link></li>
        <li className='navig'><i class="fa-brands fa-wpexplorer"></i><Link to="/customer/explore">Explore</Link></li>      
        <li className='navig'><i class="fa-regular fa-message"></i><Link to="/customer/messages">Messages</Link></li>
        <li className='navig'><i class="fa-solid fa-magnifying-glass p-1"></i><Link to="/customer/search">Search</Link></li>
        <a href='https://angkor-backend.onrender.com/logout'>Logout</a>
        </ul>
    </nav> */}
    </div>
  )
}

export default Farmer