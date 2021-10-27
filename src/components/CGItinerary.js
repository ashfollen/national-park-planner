function CGItinerary({reservation, deleteRes}) {
    
    function handleDelete(id) {
        deleteRes(reservation.id)
    }

    return (
        <>
            <h2>{reservation.title} from {reservation.start} through {reservation.end}</h2>
            <button onClick={handleDelete}>Cancel</button>
        </>
    )
}

export default CGItinerary;