import { useState , useRef, useEffect} from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todoList, setTodoList]=useState([]);
  const inputRef=useRef();
  useEffect(() =>
  {
    const localval= localStorage.getItem('TODOLIST');
    setTodoList(JSON.parse(localval));

  }, []);

  useEffect(() =>
  {
    localStorage.setItem('TODOLIST',JSON.stringify(todoList));
  }, [todoList]
  );


const handleAddClick = () =>
{
  const val=inputRef.current.value;
  const tmpToDo=[...todoList];
  tmpToDo.push({id: uuidv4(), desc:val, complete: true });
  setTodoList(tmpToDo);
  inputRef.current.value='';
}

const toogleComplete = (id) =>
{
  const tmpToDo= [...todoList];
  const todoElem= tmpToDo.find(todo => todo.id === id);
  todoElem.complete= !todoElem.complete;
  setTodoList(tmpToDo);
}

const clearComplete = () =>
{
  const tmpToDo=[...todoList];
  const unCompleteToDo = tmpToDo.filter(todo => todo.complete);
  setTodoList(unCompleteToDo);
}


  return (
    <div>
      <TodoList todoList={todoList} toogleComplete={toogleComplete}/>
      <input ref={inputRef}/>
      <button onClick={handleAddClick}>
        Add ToDo
      </button>
      <button onClick={clearComplete}>
        clear all completed ToDo
      </button>
      <p>{todoList.filter(todo => !todo.complete).length} left to go</p>
    </div>
  )
}

export default App;
