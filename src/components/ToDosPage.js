import ToDoCard from "./ToDoCard";

function ToDosPage({parkToDos, user, handleResData}) {
    return(
        <div className="todos-page">
            { parkToDos.length > 0 ?
            parkToDos.map((toDo) => <ToDoCard key={toDo.id} toDo={toDo} user={user} handleResData={handleResData}/>
            ) :
            <h2>Sorry, you'll have to find your own adventures!</h2>
            }
        </div>
    )
}

export default ToDosPage;