import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

function App() {
    return (
    <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/routines">Routines</Link>
                <Link to="/activities">Activities</Link>
                <Link to="/myroutines">My Routines</Link>
                <Link to="/login">Login/Register</Link>
            </nav>    

            
            <Route exact path='/'><Home /></Route>
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