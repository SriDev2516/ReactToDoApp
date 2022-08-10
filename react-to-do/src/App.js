import './App.css';
import ToDo from './ToDo'

function App() {
  const todos = [
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ];
  const header = "Simple ToDo For Daily Usage";

  const headerColor = 'blue';
  return (
    <div>
        <h1 style={{color: headerColor}}>To Do List</h1>
        <ToDo todos = {todos} header={header}  />
    </div>
    
  );
}

export default App;
