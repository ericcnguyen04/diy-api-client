import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <span className="navbar is-primary">
            <Link to='/'><h1>House Maker | </h1></Link>
            <Link to='/about'><h1> About</h1></Link>
            <Link to='/houseware'><h1> | Houseware</h1></Link>
        </span>
    )
}