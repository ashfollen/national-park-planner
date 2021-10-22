import collage from '../images/parks-collage.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Home({user}) {
    return (
        <div className="App">
            <div className="welcome">
                <p>{user.username}, welcome to your National Park Planner!</p>
            </div>
            <Link to="/parks-page">
                <div className="begin-exploring">
                    <img src={collage}/>
                    <div className="overlay-text">
                        <h1>Begin Exploring</h1>
                    </div>
                </div>
            </Link>
        </div>
    )
}


export default Home;