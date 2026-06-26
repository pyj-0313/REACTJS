import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About?name=timo&age=100">About</Link></li>
                    <li><Link to="/Contact/hong/40">Contact</Link></li>
                </ul>
            </nav>

            <h1>HOME PAGE</h1>
        </div>
    )
}

export default Home;