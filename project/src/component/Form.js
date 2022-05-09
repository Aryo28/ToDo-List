import React from 'react';


function Form({setTexto, Texto, lista, setLista, setFiltro}) {
    
  //Apartado para escribir codigo de JavaSc
    
    //Permite identificar e ir rastreando los inputs 
   const inputTextHandler =(e) =>{
      //console.log(e.target.value);
      setTexto(e.target.value);
    };

    //Otorga propiedades al objeto creado con cada input en la lista
    function submitTodoHandler(e) {
      e.preventDefault();
      setLista([
        ...lista, {text:Texto, completed: false, id: Math.random()*1000}
      ]);
      setTexto("");
    };

    //Verifica que el cambio de estado del filtro de acuerdo a lo que se haga en la UI
    function statusFiltro(e){
      setFiltro(e.target.value);
    }

    //Se llaman las funciones predefinidas al hacer click en bottones
    return(
        <form>
        <input value={Texto} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusFiltro} name="todos" className="filter-todo">
            <option value="all">Todas</option>
            <option value="completed">Completadas</option>
            <option value="uncompleted">No Completadas</option>
          </select>
        </div>
      </form>
    );
}

export default Form;