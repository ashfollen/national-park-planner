import RangeDatePicker from './RangeDatePicker'
import camping from '../images/camping-icon.png';
import ImageSlider from './ImageSlider';
import { FaCampground } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';

function CampgroundCard({campground, user, handleResData, addresses}) {
    
    const address = addresses.filter(address => address.type === "Physical")
    console.log("CG", campground)   
    
    return(        
        <div className="card"> 
             {campground.images[0] ? <ImageSlider images={campground.images} /> : <img width="200" src={camping} />}
            {/* <img width="200" src={campground.images[0] ? campground.images[0].url : camping} /> */}
            <div className="content">
                <h2>{campground.name}</h2>
                {address.length > 0 ? <h3><FaGlobeAmericas /> {address[0].city}, {address[0].stateCode}</h3> : ""}
                <p>{campground.description.toUpperCase()}</p>
                <p><FaCampground /> Total Sites: {campground.campsites.totalSites}</p>  
                <RangeDatePicker campground={campground} user={user} handleResData={handleResData} />   
            </div>
        </div>        
    )
}

export default CampgroundCard;