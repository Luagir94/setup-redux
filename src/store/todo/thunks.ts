import {createAsyncThunk} from '@reduxjs/toolkit';
import {Todo} from './slice';

export const GET_TODOS = createAsyncThunk('todo/GET_TODOS', async () : Promise<Todo[]>=> {
        const resp = await fetch('https://611b233c22020a00175a4357.mockapi.io/todos')
        const data = await resp.json();
        return data;
})