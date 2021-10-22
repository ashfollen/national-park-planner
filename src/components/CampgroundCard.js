function CampgroundCard({campground}) {
    console.log("CAMP CARD", campground)
    return(
        <>
            
            <img width="100" src={campground.images[0].url} />
            <h1>{campground.name}</h1>
            <p>{campground.description}</p>
            <p>Total Sites: {campground.campsites.totalSites}</p>
            
        </>
    )
}

export default CampgroundCard;