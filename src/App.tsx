import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addNewTodoHandler = (text: string) => {
        setTodos(prevTodos => [
            ...prevTodos,
            { id: Math.random().toString(), content: text },
        ]);
    };

    const deleteTodoHandler = (id: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== id);
        });
    };

    return (
        <div className="App">
            <NewTodo onAddTodo={addNewTodoHandler} />
            <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
        </div>
    );
}

export default App;
