import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import {RiCheckboxCircleLine} from 'react-icons/ri'
// import {TiEdit} from 'react-icons/ti'

function ToDo({ todos, toggleComplete, completeToggle, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({ 
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.complete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div>
                {todo.text}
                {/* {localStorage.getItem('todos')} */}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
                />
                <TiEdit 
                onClick={() => setEdit({ id:todo.id, value: todo.text })}
                className='edit-icon'
                />
                <RiCheckboxCircleLine
                    onClick={() => toggleComplete(todo.id)} 
                    className='complete-icon'
                />
            </div>
        </div>
    ))
}

export default ToDo
