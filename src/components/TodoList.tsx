import React from "react";
import "./TodoList.css";
interface TodoListProps {
    items: { id: string; content: string }[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
    return (
        <ul>
            {props.items.map(todo => (
                <li key={todo.id}>
                    <span> {todo.content}</span>
                    <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
