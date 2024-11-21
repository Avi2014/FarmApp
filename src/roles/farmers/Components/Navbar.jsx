import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navside">
      <div id='heading'>
        <h1 className='font-extrabold text-4xl'>Angkor</h1>
        </div>
        <ul className='p-4' id='navholder'>          
          <Link to="/farmer/search"><li className='navig'><i className="fa-solid fa-magnifying-glass p-1"></i><span className='hide'>Search</span></li></Link>
          <Link to="/farmer"><li className='navig'><i className="fa-solid fa-house p-1"></i><span className='hide'>Home</span></li></Link>
          <Link to="/farmer/weather"><li className='navig'><i className="fa-solid fa-cloud p-1"></i><span className='hide'>Weather</span></li></Link>            
        <Link to="/farmer/messages"><li className='navig'><i className="fa-regular fa-message p-1"></i><span className='hide'>Messages</span></li></Link>
          <Link to="/farmer/cropinfo"><li className='navig'><i className="fa-solid fa-wheat-awn p-1"></i><span className='hide'>CropInfo</span></li></Link>
          <Link to="/farmer/profile"><li className='navig'><i className="fa-solid fa-user-tie p-1"></i><span className='hide'>Profile</span></li></Link>
          <li className='navig ' id='logout' ><i className="fa-solid fa-right-from-bracket p-1"></i><a href='https://angkor-backend.onrender.com/logout'><span className='hide'>Logout</span></a></li>
          </ul>
    </nav>
  )
}

export default Navbar