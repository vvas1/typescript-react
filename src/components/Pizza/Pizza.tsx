import React, {FC} from "react";
import PizzaModule from './Pizza.module.css';
import {useStateDispatch} from "../AppState";

interface IPizza {
  id: number;
  name: string;
  description: string;
  price: number;
}
const Pizza: FC<IPizza> = ({id, name,description,price}): React.ReactElement => {
  const dispatch = useStateDispatch()
  const clickHandler = (): void => {
    dispatch({payload: {id,price,description,name}, type:"ADD_TO_CART"})
  }
  return (
    <li className={PizzaModule['pizza-item']} key={name}><div><h3>{name}</h3><h5>{description}</h5>Price: ${price}</div>
      <button className={PizzaModule['pizza-button']} onClick={clickHandler}>Add to Cart</button></li>
  )
}
export default Pizza;