import React from 'react';

//importando componentes de archivo Todo
import Todo from "./Todo";


function TodoList({lista, setLista, filtroObj}){
   

  //Apartado que permite transmitir informacion de la APP y el filtro de nuestra lista
  return(
    <div className="todo-container">
      <ul className="todo-list">
        {filtroObj.map(todo=>(
          <Todo 
          setLista={setLista} 
          lista={lista} 
          todo={todo}
          key={todo.id} 
          text={todo.text}/>
        ))}
      </ul>
    </div>
    )
}

export default TodoList;