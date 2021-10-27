import CampgroundCard from "./CampgroundCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function CampgroundsPage({parkCampgrounds, user, handleResData}) {
    
    console.log("HOW MANY CGS", parkCampgrounds.length)
    return(
        <>
            <Link to="/parks-page">
                <div className="back-to-parks">
                    
                        <h2>Back to Parks</h2>
                   
                </div>
            </Link>
        <div className="cgs-page">
            { parkCampgrounds.length > 0 ?
            parkCampgrounds.map((campground) => 
                <CampgroundCard key={campground.id} campground={campground} user={user} handleResData={handleResData} />
            ) :
            <h2>Sorry, no campgrounds at this park.</h2>
            }       
        </div>
        </>
    )
}

export default CampgroundsPage;