import ToDoCard from "./ToDoCard";

function ToDosPage({parkToDos}) {
    return(
        <div className="todos-page">
            {console.log("TODOS PAGE", parkToDos)}
            {parkToDos.map((toDo) => <ToDoCard key={toDo.id} toDo={toDo} />)}
        </div>
    )
}

export default ToDosPage;