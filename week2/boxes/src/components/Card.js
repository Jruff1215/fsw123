import './card.css'



const Card = ( {dataDisplay}) => {
    return (
        <div className="box" style={{
            backgroundColor: dataDisplay.color,
            width: '150px',
            height: '150px'}}>
            <h3>{dataDisplay.title}</h3>
            <h5>{dataDisplay.subtitle}</h5>
            <p style={{textDecoration: "overline", textDecorationColor: "white"}}>{dataDisplay.description}</p>
            
        </div>
    );
}

export default Card