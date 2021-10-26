import ParkCard from "./ParkCard";
import SearchParks from "./SearchParks";
import { useState } from 'react';

function ParksPage({parks, viewCampgrounds, viewToDos}) {
    const [searchField, setSearchField] = useState("");

    const filteredParks = parks.filter(
        (park) => {
        return (
        park
        .fullName
        .toLowerCase()
        .includes(searchField.toLowerCase())
        )}
    )
    console.log(filteredParks)

    function handleChange(e) {
        setSearchField(e.target.value)
        console.log(e.target.value)
    }

    // function searchList() {
    //     <SearchParks filteredParks={filteredParks} />
    // }

    return (
        <div>
        <h2>Search for a National Park</h2>
            <input
                type="search"
                placeholder="Search for a National Park"
                onChange={handleChange}
                />
            <SearchParks filteredParks={filteredParks} viewCampgrounds={viewCampgrounds} viewToDos={viewToDos}/>

        <div className="parks-page">
                {parks.map((park) => 
                    <ParkCard key={park.id} park={park} viewCampgrounds={viewCampgrounds} viewToDos={viewToDos} />
                )}
                </div>    
        </div>
    )
}

export default ParksPage;