import CGItinerary from './CGItinerary'
import TDItinerary from './TDItinerary'

function Itinerary({reservations, deleteRes}) {
    console.log("IN ITINERARY", reservations)
    const cgRes = reservations.filter((res) => res.category === "campground");
    const tdRes = reservations.filter((res) => res.category === "to-do") 

    return (
        <div>
            <h2>Camping</h2>
           {cgRes.map((reservation) => <CGItinerary key={reservation.id} reservation={reservation} deleteRes={deleteRes} />)}
           <h2>To Do</h2>
           {tdRes.map((reservation) => <TDItinerary key={reservation.id} reservation={reservation}/>)}
        </div>
    )
}

export default Itinerary;