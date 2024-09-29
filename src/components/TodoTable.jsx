import React from "react";

export default function TodoTable(props) {
    return <>
        <table>
            <tbody>
                <th>Date</th>
                <th>Description</th>
                {props.todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.desc}</td>
                        <td><button onClick={() => props.delete(index)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>;
}

