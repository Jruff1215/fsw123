import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div>
            <Link to='/bounty-home'> Home</Link>
            <Link to='/bounty-about'> About</Link>        
            <Link to='/bounty-contact'> Contact </Link>
        </div>
    )
}

export default NavBar