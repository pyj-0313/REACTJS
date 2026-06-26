import {Link,useLocation} from "react-router-dom"

const About = () => {
    //
    const location = useLocation();
    // console.log(location);
    const query = new URLSearchParams(location.search)
    console.log(query.get("name"),query.get("age"))

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>

            <h1>ABOUT PAGE</h1>
            <div>
                PARAMS : {query.get('name')} , {query.get('age')}
            </div>
        </div>
    )
}

export default About;