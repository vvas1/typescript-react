import React, {FC, useContext, useState} from "react";
import CartModule from './Cart.module.css';
import {AppStateContext} from "../AppState";

const Cart: FC<{}> = (): React.ReactElement => {
  const [show,setShow] = useState<boolean>(false);
  const state = useContext(AppStateContext);
  console.log(state)
  const havePizzasInStore = state.cart.items.length
  const clickHandler = () =>{
    havePizzasInStore && setShow(!show);
  }

  return (
    <div tabIndex={0} onBlur={()=> setShow(false)} className={CartModule['cart']}>
      <span onClick={clickHandler} className={`${CartModule['cart-button']} ${show ? CartModule['cart-button-active']: ""} ${havePizzasInStore ? CartModule["allowed"] : CartModule["not-allowed"]}`}>{state.cart.items.length} pizza{state.cart.items.length > 1 || state.cart.items.length === 0?"s":""}</span>
      <div className={show ? CartModule['show']:CartModule['hide']}>
        <ul className={CartModule['cart-list']}>
          {state.cart.items.map(item=>{
            return <li key={item.id} onClick={clickHandler} className={CartModule['list-item']}><div style={{display:"flex",width:'100%'}}>{item.name} x {item.quantity}</div></li>
          })}
        </ul>
      </div>
    </div>
  )
}
export default Cart;