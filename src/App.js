import './App.css';
import './styling/home.css';
import './styling/login.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
//Calendar Imports 
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
//End of Calendar Imports
import Home from "./components/Home";
import Login from "./components/Login";
import ParksPage from "./components/ParksPage";
import CampgroundsPage from "./components/CampgroundsPage";
import ToDosPage from "./components/ToDosPage";
import Itinerary from "./components/Itinerary";
import npslogo from "./images/NPS-logo.png";

const locales = {
  "en-US": require("date-fns/locale/en-US") 
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

function App() {

  const production = 'https://backend-national-park-planner.herokuapp.com';
  const development = 'http://localhost:3000';
  const url = (process.env.NODE_ENV === "production" ? production : development)

  
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [parks, setParks] = useState([])
  const [campgrounds, setCampgrounds] = useState([])
  const [parkCampgrounds, setParkCampgrounds] = useState([])
  const [toDos, setToDos] = useState([])
  const [parkToDos, setParkToDos] = useState([])
  const [reservations, setReservations] = useState([])


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
    
    fetch(`${url}/profile`, {
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
      setParkCampgrounds(campgrounds.filter((campground) => campground.parkCode === parkCode))
    }

    function viewToDos(parkCode) {
      setParkToDos(toDos.filter((toDo) => toDo.relatedParks[0].parkCode === parkCode))
    }

    useEffect(() => {
      const token = localStorage.getItem("jwt");

      fetch(`${url}/reservations`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      .then((resp) => {
        if (resp.ok) {
          resp.json()
          .then((resp) => setReservations(resp)) 
        } else {
          console.log("please log in to access reservations")
        }
      })
    }, [])
    console.log("AFTER FETCH", reservations)

    function createReservation(resData) {
      const token = localStorage.getItem("jwt");
      fetch(`${url}/reservations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          Accept: "application/json",
        },
        body: JSON.stringify(resData),
      })      
    .then((resp) => resp.json())
    .then(data => {
      console.log("CREATE RES", data)
      setReservations([...reservations, data])
    });
    console.log("RESERVATIONS", reservations)
  }

  function deleteRes(id) {
    const token = localStorage.getItem("jwt");
    fetch(`${url}/reservations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        Accept: "application/json",
      }
    })
    setReservations(reservations.filter((reservation) => reservation.id !== id))
  }
  
  return (
    <div className="app">
      {loggedIn ? <>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="select-page">
              <nav>
                <img className="nps-logo" src={npslogo} />
                <Link to="/">home</Link>
                <Link to="/parks-page">parks</Link>
                <Link to="/itinerary-page">itinerary</Link>
                <Link to="/calendar-page">calendar</Link>
                <button className="logout-button" onClick={logout}>Logout</button>
              </nav>
          </div>
          <Switch>
            <Route exact path="/">
              <Home user={user}/>
            </Route>
            <Route path="/parks-page">
              <ParksPage parks={parks} viewCampgrounds={viewCampgrounds} viewToDos={viewToDos} />
            </Route>
            <Route path="/campgrounds-page">
              <CampgroundsPage parkCampgrounds={parkCampgrounds} user={user} handleResData={createReservation} />
            </Route>
            <Route path="/todos-page">
              <ToDosPage parkToDos={parkToDos} user={user} handleResData={createReservation} />
            </Route>
            <Route path="/itinerary-page">
              <Itinerary reservations={reservations.filter((res) => res.user_id === user.id)} deleteRes={deleteRes} />
            </Route>
            <Route path="/calendar-page">
              <Calendar localizer={localizer} events={reservations} startAccessor="start" endAccessor="end" style={{height: 500, margin: "50px"}} />
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
