import './Die.css'
function Die2 ({roll2}) {
        
    if (roll2 === 1){
        return(<div className='dice img-1'></div> )
    } else if (roll2 === 2) {
        return(<div className='dice img-2'></div>)
    } else if (roll2 === 3){
        return(<div className='dice img-3'></div>)
    } else if (roll2 === 4){
        return(<div className='dice img-4'></div>)
    } else if (roll2 === 5){
        return(<div className='dice img-5'></div>)
    } else if (roll2 === 6){
        return(<div className='dice img-6'></div>)
    } else {
        return(<div className='dice img-1'></div>)
    }
 
}

export default Die2