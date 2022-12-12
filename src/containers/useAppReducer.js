import { useReducer } from "react";
import reducer, { initialState } from "./reducer";

export default function useAppReducer(user = { name: "React", age: 7 }) {
    const [state, dispatch] = useReducer(
        reducer,
        {...initialState, user },
        () => ({...initialState, user}),
      );

    return { ...state, dispatch };    
}