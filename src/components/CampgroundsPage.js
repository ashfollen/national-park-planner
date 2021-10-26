import CampgroundCard from "./CampgroundCard";

function CampgroundsPage({parkCampgrounds, user, handleResData}) {
    return(
        <div className="cgs-page">
            {parkCampgrounds.map((campground) => 
                <CampgroundCard key={campground.id} campground={campground} user={user} handleResData={handleResData} />
            )}
        </div>
    )
}

export default CampgroundsPage;