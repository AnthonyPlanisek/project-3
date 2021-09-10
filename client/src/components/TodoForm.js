import React, {useState, useEffect, useRef } from 'react'


function ToDoForm(props) {
const [input, setInput] = useState(props.edit ? props.edit.value : '');

const inputRef = useRef(null, props);

useEffect(() => {
    inputRef.current.focus()
})

const handleChange = e => {
    setInput(e.target.value);
}

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input,
        complete: false
    })

    setInput('');
}



    return (
       <form className="todo-form" onSubmit={handleSubmit}>
           {props.edit ? ( 
           <>
           <input 
           type="text" 
           placeholder="Update your task" 
           value={input} 
           name="text" 
           className="todo-input m-3 rounded edit text-black"
           onChange={handleChange}
           ref={inputRef}
           />
           <button className="todo-button edit bg-tertiary hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-3">Update</button>
           </>
           ) : ( 
           <>
           <input 
            type="text" 
            placeholder="Enter upcoming tasks..." 
            value={input} 
            name="text" 
            className="todo-input m-3 rounded text-black align-center"
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="todo-button bg-tertiary hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-3"> plant seed</button>
            </>
            )
        }
       </form>
    )
}

export default ToDoForm
