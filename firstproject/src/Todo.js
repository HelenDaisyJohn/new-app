import React from 'react';

export default function Todo({todo, toogleComplete})
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