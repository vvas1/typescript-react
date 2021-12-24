import React, {useState} from "react";
import pizzas from '../../pizzas.json';
import AppModule from './App.module.css';
import Pizza from "../Pizza/Pizza";
import PizzaSvg from '../../pizza.svg';
import Cart from "../Cart/Cart";

const App = () => {

  return (
    <div>
      <div className={AppModule['logo-container']}>
        <PizzaSvg width={100} height={100}/>
        <div className={AppModule['logo']}>Delicious pizza</div>
        <Cart />
      </div>
      <ul className={AppModule.container}>
        {pizzas.map( ({name,description,price}) =>{
          return <Pizza  key={name} name={name} description={description} price={price} />
        })}
      </ul>
    </div>
  )
}
export default App;