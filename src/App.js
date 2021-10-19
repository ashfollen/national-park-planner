import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestRoute from "./components/TestRoute"

function App() {

  const production = 'https://backend-national-park-planner.herokuapp.com';
  const development = 'http://localhost:3000';
  const url = (process.env.NODE_ENV ? production : development)

  fetch(`${url}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      user: {
        username: "testingusername",
        password: "testingpassword"
      },
    }),
  })
    .then((r) => r.json())
    .then(console.log);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="nav-bar">
        <nav>
          <Link to="/">TestRoute</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <TestRoute />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
