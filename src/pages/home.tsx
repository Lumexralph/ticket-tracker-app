import React, { StrictMode } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <header className="App-header">
            <StrictMode>
                <h1>Ticket Tracker App</h1>
                <br />
                <nav>
                    <Link to="/auth/signup">Signup</Link>|
                    <Link to="/auth/login">Login</Link>
                </nav>
            </StrictMode>
        </header>
    );
}

export default Home;
