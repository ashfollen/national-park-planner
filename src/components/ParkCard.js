function ParkCard({park}) {
    return (
        <>
        <img width="100" src={park.images[0].url}/>
        <h1>{park.name}</h1>
        <h2>{park.addresses[0].city}, {park.addresses[0].stateCode}</h2>
        </>
    )
}

export default ParkCard;