// The setState( ) method triggers the re-rendering process for the component with updated state and not the whole DOM - hence React is fast
// after the introduction of React Hooks, state can now be used both in class AND functional components.
// Components receive data from outside with props, whereas components can create and manage their own data with state
// Props are used to pass data, whereas state is for managing data
// Props(immutable) are used for passing data from parent component to child component wherein they are rendered
// React app adds nodes to the Virtual DOM known as ReactDOM
// props is always an object -> {}

// functional component -> function FunctionalComponent() {
//                              return <h1>Hello, world</h1>; }

// class component -> class ClassComponent extends React.Component {
//  render() {
//    return <h1>Hello, world</h1>; }

// both components always return JSX. THEY DIFFER IN PASSING PROPS, HANDLING STATE AND USING LIFECYCLE METHODS
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