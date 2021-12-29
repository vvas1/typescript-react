import React, {FC, useContext} from "react";
import PizzaModule from './Pizza.module.css';
import {useSetState} from "../AppState";

interface IPizza {
  id: number;
  name: string;
  description: string;
  price: number;
}
const Pizza: FC<IPizza> = ({id, name,description,price}): React.ReactElement => {
  const setState = useSetState()
  const clickHandler = () => {
    setState((state) =>{
      const itemExists = state.cart.items.find((item)=>{
        return item.id ===id;
      })
      return {
        ...state, cart: {...state.cart,
          items: itemExists
            ? state.cart.items.map(item=>{
              if (item.id === itemExists.id) {
                return {...item,quantity: item.quantity+1}
              }
              return item
            })
            : [...state.cart.items, {id,description, price, quantity: 1,name}]
        }
      }
    })
  }
  return (
    <li className={PizzaModule['pizza-item']} key={name}><div><h3>{name}</h3><h5>{description}</h5>Price: ${price}</div>
      <button className={PizzaModule['pizza-button']} onClick={clickHandler}>Add to Cart</button></li>
  )
}
export default Pizza;