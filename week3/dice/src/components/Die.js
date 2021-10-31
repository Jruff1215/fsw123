import './Die.css'
function Die ({roll}) {

    //console.log('roll: ', roll)
    //console.log('roll2: ', roll2)

    // switch (roll) {
    //     case 1:
    //         return(<div className='dice img-1'></div>)
    //     case 2:
    //         return(<div className='dice img-2'></div>)
    //     case 3:
    //         return(<div className='dice img-3'></div>)
    //     case 4:
    //         return(<div className='dice img-4'></div>)
    //     case 5:
    //         return(<div className='dice img-5'></div>)
    //     case 6:
    //         return(<div className='dice img-6'></div>)
    //     default:
    //         return(<div></div>)
    // }
        
    if (roll === 1){
        return(<div className='dice img-1'></div> )
    } else if (roll === 2) {
        return(<div className='dice img-2'></div>)
    } else if (roll === 3){
        return(<div className='dice img-3'></div>)
    } else if (roll === 4){
        return(<div className='dice img-4'></div>)
    } else if (roll === 5){
        return(<div className='dice img-5'></div>)
    } else if (roll === 6){
        return(<div className='dice img-6'></div>)
    } else {
        return(<div className='dice img-1'></div>)
    } 
}

export default Die