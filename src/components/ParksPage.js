import ParkCard from "./ParkCard";

function ParksPage({parks, viewCampgrounds, parkCampgrounds, viewToDos}) {
    return (
        <>
        {parks.map((park) => <ParkCard key={park.id} park={park} viewCampgrounds={viewCampgrounds} parkCampgrounds={parkCampgrounds} viewToDos={viewToDos} />)}
            
        </>
    )
}

export default ParksPage;