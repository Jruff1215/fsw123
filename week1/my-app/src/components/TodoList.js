import { useState } from "react"
import { uuid } from "uuidv4"
import Todo from "./Todo"
import { items } from "./STORE"
import e from "express"



const TodoList = () => {
    const [myItems, setMyItems] = useState (items)
    const [newItems, setNewItems] = useState ('')

    const mappedItems = myItems.map( (item, index) => {
        return (
                <Todo itemData={item} key = {index} />
        )
    })


    const onSubmit = (e) => {
        e.prevent.default()
        let newItem = {
            name: newItems
        }

        setMyItems([...myItems, newItem])
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
               <label>Todo Item</label>
               <input
                type='text'
                onChange={(e) => setNewItems(e.target.value) }
               />
               <button>Add New Todo</button> 
            </form>
            { mappedItems }
            <button>Click</button>
        </div>
    ) 
}

export default TodoList