import Todo from "./Todo"
import { items } from "./TodoData"

const mappedItems = items.map( item => {
    return (
            <Todo itemData={item} />
    )
})
const TodoList = () => {
    return (
        <div>
            { mappedItems }
        </div>
    ) 
}

export default TodoList