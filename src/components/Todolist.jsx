import { useRef, useState } from "react";
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import TodoTable from "./Todotable";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/de';

export default function Todolist() {
    const [todo, setTodo] = useState({ desc: "", date: dayjs(), priority: "" });
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const handleChange = e => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
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

            <Stack
                mt={2}
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                <TextField label="Description" name="desc" placeholder="Description" onChange={handleChange} value={todo.desc} />
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                    <DatePicker label="Date" name="date" value={todo.date} onChange={(date) => setTodo({...todo, date: dayjs(date)})} />
                </LocalizationProvider>
                <TextField label="Priority" name="priority" placeholder="Priority" onChange={handleChange} value={todo.priority} />
                <Button variant="outlined" onClick={addTodo}>Add</Button>
                <Button variant="outlined" onClick={handleDelete} color="error">Delete</Button>
            </Stack>
            <TodoTable todos={todos} gridRef={gridRef} />

        </>
    )
}