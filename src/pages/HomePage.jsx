import { Link } from "react-router-dom";
import './HomePage.css'

const HomePage = () => {

    return ( 
        <div className="body">
          {/* <Navbar /> */}
            <div className="links">
          <Link to="/login" className="cta-1">Login</Link>
          <Link to="/register" className="cta-2">Register</Link>
          </div>
        <div className="container">
          <div className="header">
            <h1>Welcome to Farmer Website</h1>
            <p>The best place for farmers to buy and sell their products.</p>
          </div>
          <div className="feature">
            <img
              src="https://images.unsplash.com/photo-1700743625213-271761fb5b43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyJTIwaW4lMjBmaWVsZHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Farmer in field"
            />
            <h2>Buy and Sell Products</h2>
            <p>
              Find the best deals on farming products and sell your own products to a
              wide audience.
            </p>
          </div>
          <div className="feature">
            <img
              src="https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybWVyJTIwd2l0aCUyMHRyYWN0b3J8ZW58MHx8MHx8fDA%3D"
              alt="Farmer with tractor"
            />
            <h2>Expert Advice</h2>
            <p>
              Get expert advice on farming techniques, equipment, and best practices.
            </p>
          </div>
          <div className="feature">
            <img
              src="https://plus.unsplash.com/premium_photo-1661909621192-98cd04208d8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhcm1lciUyMHdpdGglMjBoYXJ2ZXN0fGVufDB8fDB8fHww"
              alt="Farmer with harvest"
            />
            <h2>Community</h2>
            <p>
              Join a community of farmers and build relationships with other farmers
              in your area.
            </p>
          </div>
        </div>
      </div>
    )
}

export default HomePage;