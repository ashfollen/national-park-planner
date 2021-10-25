import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from "./components/Home";
import Login from "./components/Login";
import ParksPage from "./components/ParksPage";
import CampgroundsPage from "./components/CampgroundsPage";
import ToDosPage from "./components/ToDosPage";

function App() {

  const production = 'https://backend-national-park-planner.herokuapp.com/';
  const development = 'http://localhost:3000';
  const url = (process.env.NODE_ENV ? production : development)

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [parks, setParks] = useState([])
  const [campgrounds, setCampgrounds] = useState([])
  const [parkCampgrounds, setParkCampgrounds] = useState([])
  const [toDos, setToDos] = useState([])
  const [parkToDos, setParkToDos] = useState([])


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
    const campAPIRoot = "https://developer.nps.gov/api/v1/campgrounds?limit=642&";
    const accessKey=process.env.REACT_APP_ACCESSKEY;

    axios 
    .get(`${campAPIRoot}api_key=${accessKey}`)
    .then(response => setCampgrounds(response.data.data))
  }, [])

  useEffect(() => {
    const toDoAPIRoot = "https://developer.nps.gov/api/v1/thingstodo?limit=2500&";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios 
    .get(`${toDoAPIRoot}api_key=${accessKey}`)
    .then(response => { 
      setToDos(response.data.data.filter((toDo) => toDo.relatedParks[0] !== undefined && toDo.relatedParks[0].designation === "National Park"))
    })
  }, [])

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log("token: " + token)
    
    fetch(`http://localhost:3000/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setLoggedIn(true)
          setUser(data.user)
          console.log("PROFILE", data.user)
        });
      } else {
        console.log("please log in")
      }
    });
  }, []);

  
    function signup(username, password) {
      fetch(`http://localhost:3000/users`, {
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
      fetch(`http://localhost:3000/login`, {
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
            console.log(data.jwt)
            console.log("USER:", data.user)
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

    function viewCampgrounds(parkCode) {
      console.log("VIEWCAMPGROUNDS FUNCTION")
      setParkCampgrounds(campgrounds.filter((campground) => campground.parkCode === parkCode))
    }

    function viewToDos(parkCode) {
      console.log("VIEWTODOS FUNCTION")
      setParkToDos(toDos.filter((toDo) => toDo.relatedParks[0].parkCode === parkCode))
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
              {/* <Link to="/campgrounds-page">Campgrounds</Link> */}
              </nav>
          </div>
          <Switch>
            <Route exact path="/">
              <Home user={user}/>
            </Route>
            <Route path="/parks-page">
              <ParksPage parks={parks} viewCampgrounds={viewCampgrounds} viewToDos={viewToDos}/>
            </Route>
            <Route path="/campgrounds-page">
              <CampgroundsPage parkCampgrounds={parkCampgrounds} />
            </Route>
            <Route path="/todos-page">
              <ToDosPage parkToDos={parkToDos} />
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
