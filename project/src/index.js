import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//Aqui se manda manda llamar a la funcion principal APP, previamente importada, se debe importar ya que este
//archivo es el index de la pagina y de manera virtual obtiene todo el codigo html y java de los demas archivos
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
