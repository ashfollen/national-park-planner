import ToDoCard from "./ToDoCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ToDosPage({parkToDos, user, handleResData}) {
    return(
        <>
        <Link to="/parks-page">
                <div className="back-to-parks">
                    
                        <h2>Back to Parks</h2>
                   
                </div>
            </Link>
        <div className="todos-page">
            { parkToDos.length > 0 ?
            parkToDos.map((toDo) => <ToDoCard key={toDo.id} toDo={toDo} user={user} handleResData={handleResData}/>
            ) :
            <h2>Sorry, you'll have to find your own adventures!</h2>
            }
        </div>
        </>
    )
}

export default ToDosPage;