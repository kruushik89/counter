import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from './routes';
import Nav from "./components/Nav/Nav";

function App() {


    return (
        <BrowserRouter>
            <div className="App">
                <Nav/>
                <header className="App-header">
                    <Routes />
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
