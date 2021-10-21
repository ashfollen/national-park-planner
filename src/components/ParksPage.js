import ParkCard from "./ParkCard";

function ParksPage({parks, handleClick, parkCampgrounds}) {
    return (
        <>
        {parks.map((park) => <ParkCard key={park.id} park={park} handleClick={handleClick} parkCampgrounds={parkCampgrounds} />)}
            
        </>
    )
}

export default ParksPage;