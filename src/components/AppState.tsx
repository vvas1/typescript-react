import React, {FC, createContext,  Dispatch, useContext, useReducer} from "react";
interface CartItem {
  name: string; price: number,id: number, quantity: number; description: string;
}
interface AppStateValue {
  cart:{
    items: CartItem[]
  }
}
const defaultStateValue: AppStateValue = {
  cart:{
    items:[]
  }
}

export const AppStateContext = createContext(defaultStateValue);
export const AppDispatchContext = createContext<Dispatch<AddToCartAction> | undefined>(undefined);

interface Action<T> {
  type: T
}
interface AddToCartAction extends Action<"ADD_TO_CART"> {
  payload:Omit<CartItem,"quantity">;
}
const reducer = (state: AppStateValue, action: AddToCartAction) => {
  const itemToAdd = action.payload
  if (action.type === "ADD_TO_CART") {
    const itemExists = state.cart.items.find((item: CartItem) => {
      return item.id ===itemToAdd.id;
    })
    return {
      ...state, cart: {...state.cart,
        items: itemExists
          ? state.cart.items.map((item: CartItem) => {
            if (item.id === itemExists.id) {
              return {...item,quantity: item.quantity+1}
            }
            return item
          })
          : [...state.cart.items, {...itemToAdd, quantity: 1,}]
      }
    }
  }
}
export const useStateDispatch = () => {
  const dispatch  = useContext(AppDispatchContext);
  if (!dispatch) {
    throw new Error("useSetState was called outside of AppDispatchContext provider")
  }
return dispatch;
}
const AppStateProvider: FC = ({children}) =>{
  const [state,dispatch] = useReducer(reducer, defaultStateValue);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}
export default AppStateProvider