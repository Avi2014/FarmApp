import React from 'react'
import './farmerprofile.css'
import Navbar from '../Components/Navbar'
const Profilef = () => {
  return (
    <div className='site-container'>
        <Navbar />
        <div className="allcnt components">
       
    <div>
    <div className="containerprofile mx-auto ">
    <div className="profile-card ">
        <div className='profileholder'>
          <div className="imgcnt">
        <img src="https://static.vecteezy.com/system/resources/previews/004/985/994/non_2x/cartoon-farmer-with-farmland-background-free-vector.jpg" className="w-40 h-40 rounded-[160px]" alt="Profile Pic" />
        </div>
        <div className="details px-6 justify-center items-center ">
        <h1 className="text-2xl font-bold text-left">John Doe</h1>
        <p className="text-gray-700 text-left font-bold">@johndoe</p>
        <p className="text-gray-700 text-left font-semibold"><span className="text-blue-500 font-semibold">1,234</span> posts - <span className="text-blue-500 font-semibold">567</span> followers - <span className="text-blue-500 font-semibold">890</span> following</p>
        </div>
        {/* <div className="connectbtn">
        <button className='text-white bg-lime-500 rounded-full p-3 font-bold hover:bg-lime-700'>Connect</button>
        </div> */}
        </div>
        {/* <div className="stats">
            <span className="text-blue-500 font-semibold justify-center">1,234</span>
            <span className="text-gray-500 justify-center">posts</span>
            <span className="text-blue-500 font-semibold">567</span>
            <span className="text-gray-500">followers</span>
            <span className="text-blue-500 font-semibold">890</span>
            <span className="text-gray-500">following</span>
        </div> */}
    </div>
    
    <div className="posts grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-8">
        <div className="post ">
            <img src="https://t4.ftcdn.net/jpg/03/96/71/33/240_F_396713315_3ea5sCy5EWQZ6pInHJSCehgWW8SwciJW.jpg" alt="Post 1" className='rounded-lg'/>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </div>
       <div className="post">
            <img src="https://t3.ftcdn.net/jpg/03/78/21/26/240_F_378212682_UFijv8k6zOZqplvBhMlhEXCdgmLT0wnL.jpg" alt="Post 2"className='rounded-lg'/>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </div>
        <div className="post">
            <img src="https://t3.ftcdn.net/jpg/06/17/82/46/240_F_617824611_ypP0kNMSoaofS6mxMT3WJM0ToKO9u5go.jpg" alt="Post 3"className='rounded-lg'/>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </div>
        
        <div className="post">
            <img src="https://t3.ftcdn.net/jpg/01/17/83/38/240_F_117833844_ro8L9cKycjWeMl42ZekmZoCIL3rbc90K.jpg" alt="Post 4"className='rounded-lg'/>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </div>
        <div className="post">
            <img src="https://t3.ftcdn.net/jpg/00/61/83/16/240_F_61831696_DKUacT5TDw19AJjRRrBm9tGBj7lo8z9C.jpg" alt="Post 5"className='rounded-lg' />
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </div>
        <div className="post">
            <img src="https://t4.ftcdn.net/jpg/07/81/21/13/240_F_781211327_eJ3MasAUmXomalcLwgbpm4lNUBGCBDhv.jpg"alt="Post 6"className='rounded-lg'/>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </div>
    </div>
    </div>
    </div> 
    </div>
    </div>
  )
}

export default Profilef