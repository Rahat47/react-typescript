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

        if (!enteredText.trim()) {
            return textInputRef.current?.focus();
        }

        onAddTodo(enteredText);
        textInputRef.current!.value = "";
        textInputRef.current?.focus();
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
                    required
                />
            </div>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodo;
