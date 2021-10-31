import { uuid } from "uuidv4"

export const items = [

    {   
        name: 'Go to Store',
        id: uuid(),
        isComplete: true
    },
    {
        name: 'Wash Clothes',
        id: uuid(),
        isComplete: true
    },
    {
        name: 'Clean House',
        id: uuid(),
        isComplete: false
    },
    {
        name:'Wash Car',
        id: uuid(),
        isComplete: false
    }
]