import ParkCard from "./ParkCard";

function ParksPage({parks}) {
    return (
        <>
        {parks.map((park) => <ParkCard key={park.id} park={park}/>)}
            
        </>
    )
}

export default ParksPage;