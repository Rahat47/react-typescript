import React, { useRef } from "react";
import "./NewTodo.css";

type newTodoProps = {
    onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<newTodoProps> = ({ onAddTodo }) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        onAddTodo(enteredText);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="todo-text">Add New ToDo</label>
                <input
                    ref={textInputRef}
                    type="text"
                    name="todo-text"
                    id="todo-text"
                />
            </div>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodo;
