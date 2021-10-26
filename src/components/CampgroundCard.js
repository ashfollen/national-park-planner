import RangeDatePicker from './RangeDatePicker'

function CampgroundCard({campground, user, handleResData}) {
    return(
        <div className="cg-card">   
            <img width="200" src={campground.images[0].url} />
            <h2>{campground.name}</h2>
            <p>{campground.description}</p>
            <p>Total Sites: {campground.campsites.totalSites}</p>  
            <RangeDatePicker campground={campground} user={user} handleResData={handleResData} /> 
            {/* <button>Add to Itinerary</button>   */}
        </div>
    )
}

export default CampgroundCard;