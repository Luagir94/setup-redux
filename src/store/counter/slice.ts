import {PayloadAction, createSlice} from '@reduxjs/toolkit';


type CounterState = {
    value : number
}


const initialState : CounterState  = {
    value : 0
}



export const counterSlice = createSlice({
    name : 'counter',
    initialState: initialState,
    reducers : {
        INCREMENT_BY_ONE : (state) => {
            state.value += 1;
        },
        DECREMENT_BY_ONE : (state) => {
            state.value -= 1;
        },
        INCREMENT_BY_AMOUNT : (state, action : PayloadAction<number> ) => {
            state.value += action.payload;
        }
    }
});


const counterReducer = counterSlice.reducer;

export const {INCREMENT_BY_ONE, DECREMENT_BY_ONE, INCREMENT_BY_AMOUNT} = counterSlice.actions;

export default counterReducer;