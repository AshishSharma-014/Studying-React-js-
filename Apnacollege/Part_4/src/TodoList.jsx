import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
    let [todos, setTodos] = useState([{task : "Sample task", id : uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }


    return (
        <div>
            <input
                placeholder="Enter your task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <button onClick={addNewTask}>Add Task</button>
            <br>
            </br>
            <h3>Todo List</h3>
            <ul>
                {todos.map((todo) => {
                    <li key={todo.id}>{todo.task}</li>
                })}
            </ul>
        </div>
    )
}
