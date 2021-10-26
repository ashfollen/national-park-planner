import ToDoCard from "./ToDoCard";

function ToDosPage({parkToDos, user, handleResData}) {
    return(
        <div className="todos-page">
            {console.log("TODOS PAGE", parkToDos)}
            {parkToDos.map((toDo) => <ToDoCard key={toDo.id} toDo={toDo} user={user} handleResData={handleResData}/>)}
        </div>
    )
}

export default ToDosPage;