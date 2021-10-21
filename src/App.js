import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from "./components/Home";
import Login from "./components/Login";
import ParksPage from "./components/ParksPage";

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState([])
  const [parks, setParks] =useState([])

  const production = 'https://backend-national-park-planner.herokuapp.com';
  const development = 'http://localhost:3000';
  const url = (process.env.NODE_ENV ? production : development)

  useEffect(() => {
    const parkAPIRoot = "https://developer.nps.gov/api/v1/parks?limit=465&";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios 
    .get(`${parkAPIRoot}api_key=${accessKey}`)
    .then(response => {
      setParks(response.data.data.filter((park) => 
      park.designation === 'National Park'))
    })
  }, [])

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log("token: " + token)
    
    fetch(`${url}profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setLoggedIn(true)
          setUser(data.user)
        });
      } else {
        console.log("please log in")
      }
    });
  }, []);

    function signup(username, password) {
      fetch(`${url}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user: {
            username: `${username}`,
            password: `${password}`,
          },
        }),
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              setUser(data.user)
              setLoggedIn(true)
              localStorage.setItem("jwt", data.jwt);
            });
          } else {
            console.log("form incorrectly filled out")
          }
        })
    }
  
    function login(username, password) {
      fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user: {
            username: `${username}`,
            password: `${password}`
          }
        })
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            console.log("hi" + data.jwt)
            setUser(data.user)
            setLoggedIn(true)
            localStorage.setItem("jwt", data.jwt);
          });
        } else {
          console.log("wrong username/password")
        }
      })
    }
  
  
    function logout() {
      localStorage.clear()
      setUser(null)
      setLoggedIn(false)
    }
  
  

  return (
    <div className="app">
      {loggedIn ? <>
        <button className="logout-button" onClick={logout}>Logout</button>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="select-page">
              <nav>
              <Link to="/">Home</Link>
              <Link to="/parks-page">Parks</Link>
              </nav>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/parks-page">
              <ParksPage parks={parks}/>
            </Route>
          </Switch>
        </Router> 
        </>
        :
        <Login login={login} signup={signup}/>
      }
    </div>
  );
}

export default App;
