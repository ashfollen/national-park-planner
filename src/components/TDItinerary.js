import { FaTrashAlt } from 'react-icons/fa';

function TDItinerary({reservation, deleteRes}) {
    
    function handleDelete(id) {
        deleteRes(reservation.id)
    }

    return (
        <div className="schedule-item">
            <div className="title-date">
                <h3>{reservation.title}</h3>
                <h4>{reservation.start}</h4>
                <div className="delete"> 
                    <h5 onClick={handleDelete}><FaTrashAlt /></h5>
                </div>
            </div>
        </div>
    )
}

export default TDItinerary;