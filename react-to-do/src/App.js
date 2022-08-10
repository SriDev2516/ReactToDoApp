import "./App.css";
import React from "react";

function App() {
  const list = [
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false },
  ];
  const [todos, settodos] = React.useState(list);

  const header = "Simple ToDo For Daily Usage";

  const headerColor = "blue";
  return (
    <div>
      <h1 style={{ color: headerColor }}>To Do List</h1>
      <ToDo todos={todos} settodos={settodos} />
      <AddToDo settodos={settodos} />
    </div>
  );
}

function ToDo({ todos, settodos }) {
  function handleToggleToDo(todo) {
    const updatedToDos = todos.map((t) => {
      return t.id === todo.id
        ? {
            ...t,
            done: !t.done,
          }
        : t;
    });
    settodos(updatedToDos);
  }
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                onClick={() => handleToggleToDo(todo)}
                style={{ textDecoration: todo.done ? "line-through" : "" }}
              >
                {todo.text}
              </span>
              <DeleteToDo todo={todo} settodos={settodos} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function AddToDo({ settodos }) {
  const inputRef = React.useRef();
  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addToDo.value;
    

    settodos((prevToDo) => {
      const toDo = {
        id: prevToDo.length + 1,
        text: text,
        done: false,
      };
      return prevToDo.concat(toDo);
    });

    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input name="addToDo" placeholder="Add To Do" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

function DeleteToDo({ todo, settodos }) {
  function handleDeletion(){
      settodos((prevToDo) => {
        debugger;
        const v = prevToDo.filter(t=> t.id !== todo.id);
        return v;
      })
  }

  return (
    <span
      role="button"
      onClick={handleDeletion}
      style={{
        color: "red",
        marginLeft: "10px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      X
    </span>
  );
}

export default App;
