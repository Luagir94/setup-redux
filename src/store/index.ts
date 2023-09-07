import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import todoReducer from "./todo/slice";
import createsagaMiddleware from 'redux-saga';
import {takeEvery } from "redux-saga/effects";
import { fetchTodos } from "./todo/saga";


const saga = createsagaMiddleware();


 const store = configureStore({
    reducer : {
        todo: todoReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
});


saga.run(rootSaga)


function* rootSaga(){
 yield  takeEvery('todo/LOAD_TODOS', fetchTodos)
}


type RootState =  ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;



export const useAppDispatch : DispatchFunc = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export default store;



