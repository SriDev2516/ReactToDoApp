function ToDo ({props}) {
    console.log(props);
    return (
        
            <ul>
                {props.todos.map((todo) => {
                    return(
                    <li key={todo.id}>{todo.text}</li>
                    )
                })}
            </ul>
        
    );
}



export default ToDo;