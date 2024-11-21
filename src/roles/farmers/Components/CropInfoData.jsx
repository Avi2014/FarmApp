const CropInfoData = ({crop}) => {
    if(crop){
        return (
            <div className="crop-results">
                <div className="crop-bullets">
              <ol>
                <li><span>Crop Name: </span>{crop.name}</li>
                <li><span>Crop Scientific Name: </span>{crop.scientific_name}</li>
                <li><span>Optimal Growth period: </span>{crop.growth_period}</li>
                <li><span>Optimal temperature: </span>{crop.optimal_temperature}</li>
                <li><span>Optimal PH: </span>{crop.optimal_ph}</li>
                <li><span>Crop description: </span>{crop.description}</li>
              </ol>
            </div>
            </div>
        )
    }
}

export default CropInfoData