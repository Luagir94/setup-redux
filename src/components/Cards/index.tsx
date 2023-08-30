import { Todo } from '../../store/todo/slice'

export interface CardProps {
    todo: Todo,
    onComplete: (id: number) => void
}

const Cards = ({ todo, onComplete }: CardProps) => {
    return (
        <div style={{ color: 'white' }}>
            <div>{todo.title}</div>
            <div>{todo.isCompleted ? 'Completed' : 'Not Completed'}</div>
            <button onClick={() => onComplete(todo.id)}>
                Completar Todo
            </button>
        </div>
    )
}

export default Cards