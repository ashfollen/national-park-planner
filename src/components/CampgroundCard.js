import RangeDatePicker from './RangeDatePicker'
import camping from '../images/camping-icon.png';

function CampgroundCard({campground, user, handleResData}) {
    console.log("CG CARD", campground)
    return(
        <>
        
        <div className="cg-card">   
            <img width="200" src={campground.images[0] ? campground.images[0].url : camping} />
            <h2>{campground.name}</h2>
            <p>{campground.description}</p>
            <p>Total Sites: {campground.campsites.totalSites}</p>  
            <RangeDatePicker campground={campground} user={user} handleResData={handleResData} /> 
            {/* <button>Add to Itinerary</button>   */}
        </div>
        
        </>
    )
}

export default CampgroundCard;