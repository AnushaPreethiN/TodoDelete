// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="app-container">
      <div className="todo-item">
        <p className="heading">{title}</p>
        <button type="button" onClick={onDelete} className="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
