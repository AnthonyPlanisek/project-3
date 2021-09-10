import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit, TiWeatherNight} from 'react-icons/ti'
import Modal from './modal';
import {RiCheckboxCircleLine} from 'react-icons/ri'

function ToDo({ todos, toggleComplete, completeToggle, removeTodo, updateTodo, setTodos }) {
    const [showModal, setShowModal] = React.useState(false);
    const [text, setText] = React.useState("");

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

    const isOpen = value => {
        isOpen(value);
        isOpen({ 
            value: false
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return (
        <>
        {todos.map((todo, index) => (
                <>
            <div className={todo.complete ? 'todo-row complete' : 'todo-row'} key={index} onClick={(e) => {setShowModal(true); setText(todo.text)}}>
                <div>
                    {todo.text}
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
            <Modal
                showModal = {showModal}
                setShowModal = {setShowModal}
                text = {text}
                setTodos = {setTodos}
                todos = {todos}
                todo={todo}
            />
            </>
        ))
    }
    </>
    )}
    


export default ToDo
