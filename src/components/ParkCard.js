import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ParkCard({park, viewCampgrounds, parkCampgrounds, viewToDos}) {
    return (
        <>
        <img width="100" src={park.images[0].url}/>
        <h1>{park.fullName}</h1>
        <h2>{park.addresses[0].city}, {park.addresses[0].stateCode}</h2>
        <Link to="/campgrounds-page">
            <button id={park.parkCode} onClick={(e) => viewCampgrounds(e.target.id)}>View Campgrounds</button>
        </Link>
        <Link to="/todos-page">
            <button id={park.parkCode} onClick={(e) => viewToDos(e.target.id)}>View ToDos</button>
        </Link>
        </>
    )
}

export default ParkCard;