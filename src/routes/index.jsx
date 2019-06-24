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
import Exam from 'pages/Exam'
import ExamText from 'pages/Exam/ExamText'

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
          <Route path="/" exact render={(props)=>(<Layout1><Home {...props}/></Layout1>)} /> 
          <Route path="/components" render={(props)=>(<Layout1><Home/></Layout1>)} /> 
          {/* <Route path={`/v1/:id`} render={props=> ( <Exam {...props} /> )}/> */}
          <Route path={`/Examen`} render={props=> ( <Layout1><ExamText {...props} /> </Layout1>)}/>

{/* // {console.log} */}
          <Route path="/SignIn" render={(props)=>(<Layout1><SignIn/></Layout1>)} />  
          <Route path="/SignUp" render={(props)=>(<Layout1><SignUp/></Layout1>)} />  
          
          {/* <Route path="/courses/enrolled/:_id"  render={(props)=>(<Layout1><InfoCourse/></Layout1>)} />  */}

          <Route component={NoMatch} />
          </Switch>
        
      </Router>
    );
  }