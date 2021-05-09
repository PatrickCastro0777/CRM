import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Dashboard from "../pages/Dashboard";
const Routes=()=> {
 
  return (
    <div className="App">
      
      <BrowserRouter>
      <Switch>
        <Route path="/" component ={Dashboard}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
