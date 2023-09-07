import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export interface Todo {
    title: string,
    isCompleted: boolean,
    id : number
}
export interface TodoConFoto{
    title: string,
    isCompleted: boolean,
    id : number,
    url : string
}


export type TodoState = {
    todos : Todo[],
    isLoading : boolean,
    isError : string | null
}


const initialState : TodoState  = {
    todos : [],
    isLoading : false,
    isError : null
}




export const todoSlice = createSlice({
    name : 'todo',
    initialState: initialState,
    reducers : {
        ADD_TODO : (state, action : PayloadAction<Todo>) => {
            state.todos.unshift(action.payload);
        },
        COMPLETE_TODO : (state, action : PayloadAction<number>) => {
                const findTodo = state.todos.find(todo => todo.id === action.payload);
                if(findTodo){
                    findTodo.isCompleted = true;
                }
        },
        LOAD_TODOS : (state) => {
            state.isLoading = true;
        },
        LOAD_TODOS_SUCCESS : (state, action : PayloadAction<Todo[]>) => {
            state.isLoading = false;
            state.todos = action.payload;
        },
        LOAD_TODOS_ERROR : (state) => {
            state.isLoading = false;
            state.isError = 'Algo fallo';
        },
    },
 
});






const todoReducer = todoSlice.reducer;

export const { ADD_TODO , 
     COMPLETE_TODO, 
     LOAD_TODOS,LOAD_TODOS_SUCCESS , 
      LOAD_TODOS_ERROR } = todoSlice.actions;

export default todoReducer;