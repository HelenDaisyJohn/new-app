import React from 'react';

export default function TodoList({todo, toogleComplete})
{
    return (
        <div>
            <label>
                <input type='checkbox' checked={todo.completed} onChange={() => {toogleComplete(todo.id)}}>
                </input>
           {todo.desc}
           </label>
        </div>
    )
}