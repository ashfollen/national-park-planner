import ToDoCard from "./ToDoCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaBackward } from 'react-icons/fa';
import yosemite from '../images/yosemite.jpeg'
function ToDosPage({parkToDos, user, handleResData}) {
    return(
        <div className="page-body">
            <img className="todos-bg" src={yosemite} />
            <div className="back">
                <Link to="/parks-page">
                    <h2><FaBackward /> Back to Parks</h2>  
                </Link>
            </div>
            <div className="results">
                { parkToDos.length > 0 ?
                    parkToDos.map((toDo) => <ToDoCard key={toDo.id} toDo={toDo} user={user} handleResData={handleResData}/>
                    ) :
                    <h2>Sorry, you'll have to find your own adventures!</h2>
                }
            </div>
        </div>
    )
}

export default ToDosPage;