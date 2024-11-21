import Navbar from '../Components/Navbar'

const Searchf = () => {
  return (
    <div className='site-container'>
      <Navbar />
      <div className='components'>
        <form>
          <input type='text' placeholder='Search' className='searchbar' />
          <button className='searchbtn' type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Searchf