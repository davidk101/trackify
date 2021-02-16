import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom' // needed to connect components to URLs
import 'bootstrap/dist/css/bootstrap.min.css'

// importing components
import Navbar from "./components/navbar_component"
import EventList from "./components/event_list_component"
import EditEvent from "./components/edit_event_component"
import CreateEvent from "./components/create_event_component"
import CreateUser from "./components/create_user_component"

function App(){

    return(
        <Router>
            <div className = 'Container'>
            <Navbar />
            <br />
            <Route path = '/' exact component = {EventList} />
            <Route path = '/edit/:id' component = {EditEvent} />
            <Route path = '/create' component={CreateEvent} />
            <Route path = '/user' component={CreateUser} />
            </div>
        </Router>
    )
}

export default App