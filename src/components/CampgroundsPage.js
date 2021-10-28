import CampgroundCard from "./CampgroundCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaBackward } from 'react-icons/fa';
import grandcanyon from '../images/grand-canyon.jpg'

function CampgroundsPage({parkCampgrounds, user, handleResData}) {
    
   
    return (
        <div className="page-body">
            <img className="cgs-bg" src={grandcanyon} />
            <div className="back">
                <Link to="/parks-page">
                    <h2><FaBackward /> Back to Parks</h2>      
                </Link>
            </div>
            <div className="results">
                { parkCampgrounds.length > 0 ?
                    parkCampgrounds.map((campground) => 
                    <CampgroundCard key={campground.id} campground={campground} user={user} handleResData={handleResData} addresses={campground.addresses}/>
                    ) :
                    <h2>Sorry, no campgrounds at this park.</h2>
                }       
            </div>
        </div>
    )
}

export default CampgroundsPage;