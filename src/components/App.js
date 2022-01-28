import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

function App() {
    return (
    <Router>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/routines">Routines</NavLink>
                <NavLink to="/activities">Activities</NavLink>
                <NavLink to="/myroutines">My Routines</NavLink>
                <NavLink to="/login">Login/Register</NavLink>
            </nav>    

        
            <Route path='/'><Home /></Route>
            <Route path='/routines'><Routines /></Route>
            <Route path='/activities'><Activities /></Route>
            <Route path='/myroutines'><MyRoutines /></Route>
            <Route path='/login'><Login /></Route>
    
    </Router>
    );
}

function Home() {
    return <div>
        <h1>Welcome Home!</h1>
    </div>
}

function Routines() {
    return <div>
        <h1>Routines!</h1>
    </div>
}

function Activities() {
    return <div>
        <h1>Activities!</h1>
    </div>
}

function MyRoutines() {
    return <div>
        <h1>My Routines!</h1>
    </div>
}

function Login() {
    return <div>
        <h1>Login/Register Page!</h1>
    </div>
}

export default App;