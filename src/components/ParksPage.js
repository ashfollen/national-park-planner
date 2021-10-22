import ParkCard from "./ParkCard";

function ParksPage({parks, viewCampgrounds, viewToDos}) {
    return (
        <div className="parks-page">
            {parks.map((park) => 
                <ParkCard key={park.id} park={park} viewCampgrounds={viewCampgrounds} viewToDos={viewToDos} />
            )}    
        </div>
    )
}

export default ParksPage;