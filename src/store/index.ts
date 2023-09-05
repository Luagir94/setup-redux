import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


import todoReducer from "./todo/slice";

 const store = configureStore({
    reducer : {
        // counter : counterReducer,
        todo: todoReducer
    }
});

type RootState =  ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;



export const useAppDispatch : DispatchFunc = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export default store;