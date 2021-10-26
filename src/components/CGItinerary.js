function CGItinerary({reservation, deleteRes}) {
    
    function handleDelete(id) {
        deleteRes(reservation.id)
    }

    return (
        <>
            <h2>{reservation.name} from {reservation.start} through {reservation.end}</h2>
            <button id={reservation.id} onClick={handleDelete}>Cancel</button>
        </>
    )
}

export default CGItinerary;