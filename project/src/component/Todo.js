import React from 'react';


function Todo({text, lista, todo, setLista}){

//Evento eliminar elementos de la lista
function borrar(){

    //se filtran los elementos que se estan incluyendo en la lista, se compara su ID 
    //con el ID del objeto en la lista y si coincide se procede a eliminarlo
    setLista(lista.filter((el) => el.id!== todo.id));
    //console.log(todo);
};

//Evento para marcar elemento como completado de
function completado(){
    setLista(lista.map((item) =>{

        if (item.id === todo.id){
            return{
                //...item
                //permite pegar las propiedades del objeto que ya se habian predefindo(id,texto,etc)
                ...item, completed: !item.completed
                //ademas de pegar las propiedades del objeto se modifica la propiedad
                //completed a lo contrario que contenga (de false a true o visceversa) 
            }
        }
        return item;
        
    }))
    //console.log(todo);
}

    //Se ejecutan las funciones de borrado y completado al hacer click en el boton especifico
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed": ""}`}> {text}</li>
            
             
            <button onClick={completado} className="complete-btn" >
                <i className="fas fa-check"></i>
            </button>

            <button onClick={borrar} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;