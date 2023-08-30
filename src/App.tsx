import { useAppDispatch, useAppSelector } from './store'
import { useRef } from 'react'
import { DECREMENT_BY_ONE, INCREMENT_BY_AMOUNT, INCREMENT_BY_ONE } from './store/counter/slice'
import './App.css'
import { COMPLETE_TODO, ADD_TODO, Todo } from './store/todo/slice'
import Cards from './components/Cards'



function App() {
  const { value: counterValue } = useAppSelector((state) => state.counter)
  const todos = useAppSelector((state) => state.todo.todos)
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLInputElement>(null)


  const addTodo = () => {

    if (!ref.current) return

    if (ref.current?.value.trim() === '') {
      ref.current.value = ''
      return
    }

    const newTodo: Todo = {
      title: ref.current.value,
      isCompleted: false,
      id: Date.now()
    }

    dispatch(ADD_TODO(newTodo))

    ref.current.value = ''
  }

  const onComplete = (id: number): void => {
    dispatch(COMPLETE_TODO(id))
  }

  return (
    <>
      <div className="card">
        <button onClick={() => dispatch(INCREMENT_BY_ONE())}>
          + 1
        </button>
        <button onClick={() => dispatch(DECREMENT_BY_ONE())}>
          - 1
        </button>
        <button onClick={() => dispatch(INCREMENT_BY_AMOUNT(5))}>
          + 5
        </button>

        <p>{counterValue}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2>TODOS</h2>
        <label style={{ display: 'flex', gap: 15, alignItems: 'baseline' }}>
          New Todo
          <input type='text' ref={ref} />
          <button onClick={addTodo}> Add TODO</button></label>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 15
        }}>
          {todos.length > 0 && todos.map(todo =>
            <Cards todo={todo} onComplete={onComplete} key={todo.id} />)}
        </div>
      </div>
    </>
  )
}

export default App
