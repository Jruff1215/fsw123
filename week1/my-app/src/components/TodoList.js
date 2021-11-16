import Todo from "./Todo"
// import { items } from "./STORE"




const TodoList = ({todos, completeTodo, deleteTodo, editTodo}) => {
    
    const mappedItems = todos.map( (item, index) => {
        return (
            <div>
                <Todo itemData={item} key = {index} completeTodo={completeTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
       </div> )
    
    })

    return (
        <div>
            { mappedItems }
        </div>
    ) 
}

export default TodoList