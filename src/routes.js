import React from 'react';
import {Route, Switch} from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Home from "./pages/Home/Home";

export default () => {
    return (
        <Switch>
            <Route path='/counter' render={()=> <Counter />} />
            <Route path='/' render={()=> <Home />}/>
        </Switch>
    )
}
