import { CardData } from "./CardData"
import Card from "./Card"

const mappedData = CardData.map( (data, index) => {
    return (
        <Card key={index}dataDisplay ={data} />

    )
})

const DisplayData = () => {
    return (
        <div>
            {mappedData}
        </div>
    )
}

export default DisplayData