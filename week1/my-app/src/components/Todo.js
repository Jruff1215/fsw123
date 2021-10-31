
const Todo = ( {itemData} ) => {
    return (
        <div>
            <input type='checkbox' />
            <span style={{textDecoration: 'lineThrough'}}>{itemData}</span>
        </div>
    ) 
}

export default Todo