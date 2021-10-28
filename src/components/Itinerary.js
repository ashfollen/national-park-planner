import CGItinerary from './CGItinerary';
import TDItinerary from './TDItinerary';
import rainier from '../images/mt-rainier.jpeg';
import { FaCampground } from 'react-icons/fa';
import { FaWalking } from 'react-icons/fa';


function Itinerary({reservations, deleteRes}) {
    
    const cgRes = reservations.filter((res) => res.category === "campground");
    const tdRes = reservations.filter((res) => res.category === "to-do") 

    return (
        <div className="page-body">
            <img className="itinerary-bg" src={rainier} />
            <div className="page-divide">
                <div className="no-content">

                </div>
                <div className="reservations">
                    <div className="camping-res">
                        <h2><FaCampground /> Camping</h2>
                        {cgRes.map((reservation) => <CGItinerary key={reservation.id} reservation={reservation} deleteRes={deleteRes} />)}
                    </div>
                    <div className="todo-res">
                        <h2><FaWalking />Activities</h2>
                        {tdRes.map((reservation) => <TDItinerary key={reservation.id} reservation={reservation}deleteRes={deleteRes} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itinerary;