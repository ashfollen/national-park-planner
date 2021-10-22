import TableDatePicker from './TableDatePicker'

function ToDoCard({toDo}) {
    return(
        <div className="todo-card">
            <img width="200" src={toDo.images[0].url}/>
            <h1>{toDo.title}</h1>
            <p>{toDo.shortDescription}</p>
            <h4>Add to Itinerary: </h4><TableDatePicker />  
        </div>
    )
}

export default ToDoCard;