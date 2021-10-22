import RangeDatePicker from './RangeDatePicker'

function CampgroundCard({campground}) {
    return(
        <div className="cg-card">   
            <img width="200" src={campground.images[0].url} />
            <h2>{campground.name}</h2>
            <p>{campground.description}</p>
            <p>Total Sites: {campground.campsites.totalSites}</p>  
            <h4>Add to Itinerary: </h4><RangeDatePicker />   
        </div>
    )
}

export default CampgroundCard;