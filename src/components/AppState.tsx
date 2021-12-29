import React, {FC, createContext, useState, Dispatch, SetStateAction, useContext} from "react";
interface AppStateValue {
  cart:{
    items: {name: string; price: number,id: number, quantity: number}[]
  }
}
const defaultStateValue: AppStateValue = {
  cart:{
    items:[]
  }
}

export const AppStateContext = createContext(defaultStateValue);
export const AppSetStateContext = createContext<Dispatch<SetStateAction<AppStateValue>> | undefined>(undefined);

export const useSetState = () => {
  const setState  = useContext(AppSetStateContext);
  if (!setState) {
    throw new Error("useSetState was called outside of AppSetStateContext provider")
  }
return setState;
}
const AppStateProvider: FC = ({children}) =>{
  const [state,setState] = useState(defaultStateValue);
  return (
    <AppStateContext.Provider value={state}>
      <AppSetStateContext.Provider value={setState}>
        {children}
      </AppSetStateContext.Provider>
    </AppStateContext.Provider>
  )
}
export default AppStateProvider