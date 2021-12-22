import React, {useState} from "react";
import pizzas from '../../pizzas.json';
import AppModule from './App.module.css';
import Pizza from "../Pizza/Pizza";

const App = () => {
 return (
   <div>hello world from {name}
    <ul className={AppModule.container}>
     {pizzas.map( ({name,description,price}) =>{
      return <Pizza name={name} description={description} price={price} />
     })}
    </ul>
   </div>
 )
}
export default App;