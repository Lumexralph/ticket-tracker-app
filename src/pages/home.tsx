import React from 'react';
import { Link } from 'react-router-dom';


export const Home: React.FC = () => {
    return (
        <header className="App-header">
            <h1>Ticket Tracker App</h1>
            <br />
            <nav>
                <Link to="/auth/signup">Signup</Link>|
                <Link to="/auth/login">Login</Link>
            </nav>
        </header>
    );
}
