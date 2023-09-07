import {call, put} from 'redux-saga/effects'
import { LOAD_TODOS_ERROR, LOAD_TODOS_SUCCESS, Todo } from './slice'

export function* fetchTodos(){
    try {
        const res : Response = yield call(() =>fetch('https://611b233c22020a00175a4357.mockapi.io/todos'))
        const todos : Todo[] = yield res.json()
        yield put( LOAD_TODOS_SUCCESS(todos))

    } catch (error) {
        yield put(LOAD_TODOS_ERROR())
    }
}