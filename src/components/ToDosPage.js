import ToDoCard from "./ToDoCard";

function ToDosPage({parkToDos}) {
    return(
        <>
            {console.log("TODOS PAGE", parkToDos)}
            {parkToDos.map((toDo) => <ToDoCard key={toDo.id} toDo={toDo} />)}
        </>
    )
}

export default ToDosPage;