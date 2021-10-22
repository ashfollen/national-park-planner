import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ParkCard({park, viewCampgrounds, viewToDos}) {
    return (
        <div className="park-card">
            <img width="200" src={park.images[0].url}/>
            <h2>{park.fullName}</h2>
            <h3>{park.addresses[0].city}, {park.addresses[0].stateCode}</h3>
            <Link to="/campgrounds-page">
                <button id={park.parkCode} onClick={(e) => viewCampgrounds(e.target.id)}>View Campgrounds</button>
            </Link>
            <Link to="/todos-page">
                <button id={park.parkCode} onClick={(e) => viewToDos(e.target.id)}>View ToDos</button>
            </Link>
        </div>
    )
}

export default ParkCard;