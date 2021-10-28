import ParkCard from "./ParkCard";
import SearchParks from "./SearchParks";
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import rmnp from '../images/sand-dunes.jpeg'

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
    
    function handleChange(e) {
        setSearchField(e.target.value)
        console.log(e.target.value)
    }
    
    return (
        <div className="page-body">
            <img className="parks-bg" src={rmnp} />
            <div className="search">
                <FaSearch />
                <input
                    type="search"
                    placeholder=" Search for a National Park"
                    onChange={handleChange}
                />
            </div>
            <div className="results">
                <SearchParks filteredParks={filteredParks} viewCampgrounds={viewCampgrounds} viewToDos={viewToDos}/>    
            </div>

            {/* <hr /> */}

        {/* <div className="parks-page">
                {parks.map((park) => 
                    <ParkCard key={park.id} park={park} viewCampgrounds={viewCampgrounds} viewToDos={viewToDos} />
                )}
                </div>     */}
        </div>
    )
}

export default ParksPage;