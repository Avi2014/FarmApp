import Navbar from '../CustomerComponents/NavbarC'
const Profilec = () => {

  return (
    <div>
      <Navbar />
      <div className="allcnt">
        <div className="containerprofile mx-auto ">
          <div className="profile-card">
            <div className='profileholder flex'>
              <div className="imgcnt">
                <img src="https://static.vecteezy.com/system/resources/previews/004/985/994/non_2x/cartoon-farmer-with-farmland-background-free-vector.jpg" className="w-40 h-40 rounded-[160px]" alt="Profile Pic" />
              </div>
              <div className="details px-6 justify-center items-center ">
                <h1 className="text-2xl font-bold text-left">John Doe</h1>
                <p className="text-gray-500 text-left">@johndoe</p>
                <p className="text-gray-500 text-left"><span className="text-blue-500 font-semibold">1,234</span> posts - <span className="text-blue-500 font-semibold">567</span> followers - <span className="text-blue-500 font-semibold">890</span> following</p>
              </div>
              <div className="connectbtn">
                <button className='text-white bg-lime-500 rounded-full p-3 font-bold hover:bg-lime-700'>Connect</button>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
 )
  
}

export default Profilec