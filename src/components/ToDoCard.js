import TableDatePicker from './TableDatePicker'
import picnic from '../images/picnic-icon.png';
import CampgroundCard from './CampgroundCard';
import ImageSlider from './ImageSlider';
import { FaGlobeAmericas } from 'react-icons/fa';

function ToDoCard({toDo, user, handleResData}) {
    
    console.log("ToDo", toDo)
    
    return(
        <div className="card">
            {/* {toDo.images[0] ? <ImageSlider images={toDo.images} /> : <img width="200" src={picnic}/> } */}
            <div className="still">
                <img className="image" src={toDo.images[0] ? toDo.images[0].url : picnic}/>
            </div>
            <div className="content">
                <h2>{toDo.title}</h2>
                <h3><FaGlobeAmericas /> {toDo.relatedParks[0].fullName}</h3>
                <p>{toDo.shortDescription.toUpperCase()}</p>
                <TableDatePicker toDo={toDo} user={user} handleResData={handleResData}/>  
            </div>
        </div>
    )
}

export default ToDoCard;