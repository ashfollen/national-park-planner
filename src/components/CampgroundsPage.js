import CampgroundCard from "./CampgroundCard";

function CampgroundsPage({parkCampgrounds}) {
    console.log("CAMP PAGE", parkCampgrounds)
    return(
        <>
            {parkCampgrounds.map((campground) => <CampgroundCard key={campground.id}campground={campground}/>)}
        </>
    )
}

export default CampgroundsPage;