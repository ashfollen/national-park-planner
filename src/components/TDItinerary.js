function TDItinerary({reservation, deleteRes}) {
    
    function handleDelete(id) {
        deleteRes(reservation.id)
    }

    return (
        <>
        <h3>{reservation.title} on {reservation.start}</h3>
        <button onClick={handleDelete}>Cancel</button>
        </>
    )
}

export default TDItinerary;