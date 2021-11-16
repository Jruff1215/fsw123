import { useState } from "react"
  
const Todo = ( {itemData, completeTodo, deleteTodo, editTodo} ) => {
    const [todoEdit, setTodoEdit] = useState(false)
    const [editName, setEditName] = useState(itemData.name)
   
    const handleChange = (e) => {
        completeTodo(itemData.id)
    }
    const handleClick = (e) => {
        deleteTodo(itemData.id)
    }

    const handleEdit = () => {
        setTodoEdit(!todoEdit)
        console.log(todoEdit)
     }
    const saveEdit = () => {
        setTodoEdit(!todoEdit)
        let editedTodo = itemData
        editedTodo.name = editName
        editTodo(editedTodo)

    }
    const cancelEdit = () => {
        setTodoEdit("");
    }
    return (
        <div>
            {
                todoEdit ?
                <>
                <input type='text' value={editName}
                onChange={(e) => setEditName(e.target.value)} />
                <button onClick={saveEdit} disabled={!editName}>Submit Changes</button>
                <button onClick={cancelEdit}>Cancel</button>
                </>
                :
                <>
            <input type='checkbox' checked={itemData.isComplete}   onChange={handleChange} />
            <span>{itemData.name}</span>
            <button onClick={handleClick} >X</button>
            <button onClick={handleEdit} disabled={itemData.isComplete}>Edit</button>
                </>

            }
        </div>
    ) 
}

export default Todo