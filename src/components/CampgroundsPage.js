import CampgroundCard from "./CampgroundCard";

function CampgroundsPage({parkCampgrounds, user, handleResData}) {
    console.log("HOW MANY CGS", parkCampgrounds.length)
    return(
        <div className="cgs-page">
            { parkCampgrounds.length > 0 ?
            parkCampgrounds.map((campground) => 
                <CampgroundCard key={campground.id} campground={campground} user={user} handleResData={handleResData} />
            ) :
            <h2>Sorry, no campgrounds at this park.</h2>
            }       
        </div>
    )
}

export default CampgroundsPage;