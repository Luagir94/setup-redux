import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GET_TODOS } from './thunks';


export type Todo = {
    title: string,
    isCompleted: boolean,
    id : number
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
        }
    },
    extraReducers : (builder) =>{
        builder.addCase(GET_TODOS.pending, ( state   ) => {
            state.isLoading = true;
        })

        builder.addCase(GET_TODOS.fulfilled, (state, action : PayloadAction<Todo[]>) => {
            state.todos = action.payload;
            state.isLoading = false;
        })

        builder.addCase(GET_TODOS.rejected, ( state, action ) => {
            state.isLoading = false;
            state.isError = action.error.message ??  'Hay un error';
        })


}
});


const todoReducer = todoSlice.reducer;

export const { ADD_TODO ,  COMPLETE_TODO } = todoSlice.actions;

export default todoReducer;