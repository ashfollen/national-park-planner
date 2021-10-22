function ToDoCard({toDo}) {
    return(
        <>
            <img width="100" src={toDo.images[0].url}/>
            <h1> {toDo.title}</h1>
            <p>{toDo.shortDescription}</p>
        </>
    )
}

export default ToDoCard;