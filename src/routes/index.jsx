import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Layout1 from 'layouts';
import Home from 'pages/home'

import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'

function NoMatch({ location }) {
    return (
      <div className="jumbotron align-items-center">
        <h3>
          
          Pagina no encontrada <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }



  
export default function Routes(props) {
    return (
      <Router>
        
          <Switch>
          <Route path="/" exact render={(props)=>(<Layout1><Home/></Layout1>)} /> 
          
          <Route path="/SignIn" render={(props)=>(<Layout1><SignIn/></Layout1>)} />  
          <Route path="/SignUp" render={(props)=>(<Layout1><SignUp/></Layout1>)} />  
          
          {/* <Route path="/courses/enrolled/:_id"  render={(props)=>(<Layout1><InfoCourse/></Layout1>)} />  */}

          <Route component={NoMatch} />
          </Switch>
        
      </Router>
    );
  }