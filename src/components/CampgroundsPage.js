import CampgroundCard from "./CampgroundCard";

function CampgroundsPage({parkCampgrounds}) {
    return(
        <div className="cgs-page">
            {parkCampgrounds.map((campground) => 
                <CampgroundCard key={campground.id}campground={campground}/>
            )}
        </div>
    )
}

export default CampgroundsPage;