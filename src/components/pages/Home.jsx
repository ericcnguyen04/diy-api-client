import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Create your dream home!</h1>
            <h2>Place all the necessities for your dream home!</h2>


            <h3>Start your dream home now!</h3>
            <Link to='/houseware'>Click me!</Link>
        </div>
    )
}