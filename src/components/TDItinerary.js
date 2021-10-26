function TDItinerary({reservation}) {
    
    return (
        <>
        <h3>{reservation.name} on {reservation.start}</h3>
        <button>Cancel</button>
        </>
    )
}

export default TDItinerary;