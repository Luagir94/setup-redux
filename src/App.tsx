import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useAppDispatch, useAppSelector } from './store'
import { DECREMENT_BY_ONE, INCREMENT_BY_AMOUNT, INCREMENT_BY_ONE } from './store/counter/slice'
import './App.css'


function App() {
  const { value: counterValue } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
