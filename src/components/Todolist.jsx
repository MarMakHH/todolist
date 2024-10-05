import { useRef, useState } from "react"
import TodoTable from "./Todotable";

export default function Todolist() {
    const [todo, setDesc] = useState({ desc: "", date: "", priority: "" });
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const handleChange = e => {
        setDesc({ ...todo, [e.target.name]: e.target.value });
    }

    const addTodo = () => {
        setTodos([...todos, todo]);
    }

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) => 
              index != gridRef.current.getSelectedNodes()[0].id))
          }
          else {
            alert('Select a row first!');
          }
    }

    return (
        <>
            <input type="text" name="desc" placeholder="Description" onChange={handleChange} value={todo.desc} />
            <input type="date" name="date" placeholder="Date" onChange={handleChange} value={todo.date} />
            <input type="text" name="priority" placeholder="Priority" onChange={handleChange} value={todo.priority} />
            <button onClick={addTodo}>Add</button>
            <button onClick={handleDelete}>Delete</button>
            <TodoTable todos={todos} gridRef={gridRef} />

        </>
    )
}