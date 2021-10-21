function ParkCard({park, handleClick, parkCampgrounds}) {
    return (
        <>
        <img width="100" src={park.images[0].url}/>
        <h1>{park.fullName}</h1>
        <h2>{park.addresses[0].city}, {park.addresses[0].stateCode}</h2>
        <button id={park.parkCode} onClick={(e) => handleClick(e.target.id)}>View Campgrounds</button>
        </>
    )
}

export default ParkCard;