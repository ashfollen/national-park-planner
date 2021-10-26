import ParkCard from './ParkCard'

function SearchParks({filteredParks, viewCampgrounds, viewToDos}) {
    return (
        <div>
            {filteredParks.map((park) => <ParkCard key={park.id} park={park} viewCampgrounds={viewCampgrounds} viewToDos={viewToDos} />)}
        </div>
    )
}

export default SearchParks; 