import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    const [todos, setTodos] = useState(localTodos);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        
        localStorage.setItem("todos", JSON.stringify(newTodos));
        
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        )
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    const [completeToggle, setCompleteToggle] = useState();
    
    const toggleComplete = todoId => {
      const newTodos = todos.map(todo => {
          if (todo.id === todoId) {
              todo.complete = true
          }

          return todo
      })

        setTodos(newTodos)
    }
    console.log('todos ', todos)

    return (
        <div>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} toggleComplete={toggleComplete} completeToggle={completeToggle} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
