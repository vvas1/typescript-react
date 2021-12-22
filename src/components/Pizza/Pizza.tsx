import React, {FC} from "react";
import PizzaModule from './Pizza.module.css';

interface IPizza {
  name: string;
  description: string;
  price: number;
}
const Pizza: FC<IPizza> = ({name,description,price}): React.ReactElement => {
  return (
    <li className={PizzaModule['pizza-item']} key={name}><h3>{name}</h3><h5>{description}</h5>Price: ${price}</li>
  )
}
export default Pizza;