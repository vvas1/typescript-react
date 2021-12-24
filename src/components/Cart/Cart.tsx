import React, {FC, useState} from "react";
import CartModule from './Cart.module.css';

const Cart: FC<{}> = (): React.ReactElement => {
  const [show,setShow] = useState<boolean>(false);
  const clickHandler = () =>{
    setShow(!show);
  }
  return (
    <div tabIndex={0} onBlur={clickHandler} className={CartModule['cart']}>
      <span onClick={clickHandler} className={`${CartModule['cart-button']} ${show ? CartModule['cart-button-active']: ""}`}>2 pizza(s)</span>
      <div className={show?CartModule['show']:CartModule['hide']}>
        <ul className={CartModule['cart-list']}>
          <li onClick={clickHandler} className={CartModule['list-item']}>Napoletana</li>
          <li onClick={clickHandler} className={CartModule['list-item']}>Caprese</li>
        </ul>
      </div>
    </div>
  )
}
export default Cart;