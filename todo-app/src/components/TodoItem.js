import { useState } from "react";

function TodoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const handle = () =>{
    if(!newText.trim()) return;  // Prevent empty text submission and whitespace
    editTodo(todo.id, newText);
    setIsEditing(false);
  }
  return (
    <li className={todo.completed ? "completed" : ""}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}  // Update newText state on input change
          />
          <button onClick={handle}>Save</button>
        </>
      ) : (
        <>
        <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
        <button id="delButton" onClick={() => deleteTodo(todo.id)}>❌</button>
        <button onClick={() => setIsEditing(true)}>✏️</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
