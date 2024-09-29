import { useState } from "react"
import TodoTable from "./Todotable";

export default function Todolist() {
    const [todo, setDesc] = useState({ desc: "", date: "" });
    const [todos, setTodos] = useState([]);

    const handleChange = e => {
        setDesc({ ...todo, [e.target.name]: e.target.value });
    }

    const addTodo = () => {
        setTodos([...todos, todo]);
    }

    const deleteTodo = index => {
        setTodos(todos.filter((todo, i) => i !== index));
    }

    return (
        <>
            <input type="text" name="desc" placeholder="Description" onChange={handleChange} value={todo.desc} />
            <input type="text" name="date" placeholder="Date" onChange={handleChange} value={todo.date} />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} delete={deleteTodo}/>
            
        </>
    )
}