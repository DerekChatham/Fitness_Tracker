import React from 'react';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function App() {
    return (
    <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/routines">Routines</Link>
                <Link to="/activities">Activities</Link>
                <Link to="/my_routines">My Routines</Link>
                <Link to="/login_register">Login/Register</Link>
            </nav>    

        <Routes>
            <Route path='/' element={Home } />
            <Route path='/routines' element={Routines } />
            <Route path='/activities' element={Activities } />
            <Route path='/myroutines' element={MyRoutines } />
            <Route path='/login' element={LoginRegister } />
        </Routes>
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

function LoginRegister() {
    return <div>
        <h1>Login/Register Page!</h1>
    </div>
}

export default App;