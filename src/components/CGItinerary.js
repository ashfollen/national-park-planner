import { FaTrashAlt } from 'react-icons/fa';

function CGItinerary({reservation, deleteRes}) {
    
    function handleDelete(id) {
        deleteRes(reservation.id)
    }

    return (
        <div className="camp-items">
            <div className="camp-title-date">
                <h3>{reservation.title}</h3>
                <h4>{reservation.start} through {reservation.end}</h4>
            </div>
            <div className="delete"> 
                <h5 onClick={handleDelete}><FaTrashAlt /></h5>
            </div>
        </div>
    )
}

export default CGItinerary;