import { createContext,useReducer } from "react";
import { loginReducer } from "./Reducer";
const initState = {
    userId:null,
    isFetching:false,
    error:false
}

export const Context = createContext(initState);
export const ContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(loginReducer,initState);

   
    return (
        <Context.Provider 
        value={{
            userId:state.userId,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}