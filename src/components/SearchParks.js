import ParkCard from './ParkCard'

function SearchParks({filteredParks, viewCampgrounds, viewToDos}) {
    return (
        <>
            {filteredParks.map((park) => <ParkCard key={park.id} park={park} viewCampgrounds={viewCampgrounds} viewToDos={viewToDos} />)}
        </>
    )
}

export default SearchParks; 