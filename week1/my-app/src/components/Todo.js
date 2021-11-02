
const Todo = ( {itemData, completeTodo, deleteTodo} ) => {
    
    const handleChange = (e) => {
        completeTodo(itemData.id)
    }
    const handleClick = (e) => {
        deleteTodo(itemData.id)
    }
    return (
        <div>
            <input type='checkbox' checked={itemData.isComplete}   onChange={handleChange} />
            <span>{itemData.name}</span>
            <button onClick={handleClick} >X</button>
        </div>
    ) 
}

export default Todo