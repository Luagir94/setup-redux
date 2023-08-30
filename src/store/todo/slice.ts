import { PayloadAction, createSlice} from '@reduxjs/toolkit';


export type Todo = {
    title: string,
    isCompleted: boolean,
    id : number
}


export type TodoState = {
    todos : Todo[],
}


const initialState : TodoState  = {
    todos : [],
}



export const todoSlice = createSlice({
    name : 'todo',
    initialState: initialState,
    reducers : {
        ADD_TODO : (state, action : PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        COMPLETE_TODO : (state, action : PayloadAction<number>) => {
                const findTodo = state.todos.find(todo => todo.id === action.payload);
                if(findTodo){
                    findTodo.isCompleted = true;
                }
        }
    }
});


const todoReducer = todoSlice.reducer;

export const { ADD_TODO ,  COMPLETE_TODO } = todoSlice.actions;

export default todoReducer;