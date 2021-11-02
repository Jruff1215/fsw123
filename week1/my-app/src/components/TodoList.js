import Todo from "./Todo"
// import { items } from "./STORE"




const TodoList = ({todos, completeTodo, deleteTodo}) => {
    
    const mappedItems = todos.map( (item, index) => {
        return (
            <div>
                <Todo itemData={item} key = {index} completeTodo={completeTodo} deleteTodo={deleteTodo} />
       </div> )
    
    })

    return (
        <div>
            { mappedItems }
        </div>
    ) 
}

export default TodoList