import React, { useState, useEffect } from 'react';
import './App.css';
//importar componentes
import Form from "./component/Form";
import TodoList from "./component/TodoList";

//Apartado principal
function App() {
  //Estados principales
  const[Texto, setTexto] = useState("");
  const[lista, setLista] = useState([]);
  const[filtro,setFiltro] = useState('all');
  const[filtroObj,setFiltroObj] = useState([]);
  
//Ejecutar al iniciar y solo una vez
useEffect(()=>{
  getLocalLista();
}, []);



//UseFfect → se realiza una accion cada que hay un cambio de estado
useEffect(() =>{
    saveLocal();
    FiltroHandler(); 
  },[lista,filtro]);



  //Funciones


  //Funcion para filtrar, si ya se cumplio la tarea, no y todos los elementos de la lista
  function FiltroHandler(){
    switch(filtro){
      case 'completed':
        setFiltroObj(lista.filter((todo) =>todo.completed === true));
        break;
      case 'uncompleted':
        setFiltroObj(lista.filter((todo) =>todo.completed === false));
        break;
      default:
        setFiltroObj(lista);
        break;
        
    }
  }

  //Almacenamiento local de lista ToDo
  const saveLocal = () => {
      localStorage.setItem('lista',JSON.stringify(lista));
  };

  //Obtener informacion almacenada de manera local para no perder la lista previamente creada
  const getLocalLista = () => {
    if (localStorage.getItem('lista') === null){
      localStorage.setItem('lista',JSON.stringify([]));
    }else{
     let listaLocal= JSON.parse(localStorage.getItem('lista'));
      setLista(listaLocal);
    }
  }


//Returns para enviar informacion de constantes y funciones entre los archivos js
  return (
    <div className="App">
      <header>
      <h1>Armando's ToDo List</h1>
      </header>
     
      <Form 
        Texto={Texto} 
        setTexto={setTexto} 
        lista ={lista} 
        setLista={setLista}
        setFiltro={setFiltro}
        
        />
      <TodoList 
        setLista={setLista} 
        lista={lista}
        filtroObj={filtroObj}
        /> 
    </div> 
  );
}

export default App;