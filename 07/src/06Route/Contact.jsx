import {Link, useParams} from "react-router-dom"

const Contact = () => {
    // console.log(useParams());
    const {name,age} = useParams();

    
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
            <h1>CONTACT PAGE</h1>
            <div>
                Params : {name},{age}
            </div>
        </div>
    )
}

export default Contact;