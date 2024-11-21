import Navbar from '../Components/Navbar'
import {useEffect, useState } from 'react'
import axios from 'axios';
import CropInfoData from '../Components/CropInfoData';
import './CropInfo.css'


const CropInfo = () => {

  const [cropList, setCropList] = useState([])
  const [cropValue, setCropValue] = useState("")
  const [crop, setCrop] = useState([])

  useEffect(() => {
    axios.get('https://angkor-backend.onrender.com/api/crops')
    .then(res => res.data)
    .then(data => {
      setCropList(data)
    })
  }, [])


  const handle = (e) => {
    e.preventDefault()
    const selectedCrop = cropList.find(crop => crop.crop.name.toLowerCase() === cropValue.toLowerCase())
    setCrop(selectedCrop)
  }

  

  return (
    <div>
      <Navbar />
      <div className="crop-body">
      <div className='crop-container'>
      <h1>Crop Information</h1>
      <form onSubmit={handle}> 
      <div className="crop-search-bar">
				<input type="text" name="cropName" className='crop-search-input' placeholder="Enter crop name..." value={cropValue} onChange={(e) => setCropValue(e.target.value)}/>
        <br />
        <button type="submit" className='crop-search-button'>Submit</button>
        </div>
      </form>
      <div className="crop-info">
      <CropInfoData crop={crop.crop} />
      </div>
    </div>
    </div>
    </div>
  )
}

export default CropInfo