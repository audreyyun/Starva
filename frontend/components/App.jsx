import React from "react";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Route } from 'react-router-dom'

const App = () => (
    <div>
        <h1>Starva</h1>
        <Route exact path="/" component={SignUpFormContainer}/>
        <Route path="/signup" component={SignUpFormContainer}/>
        <Route path="/login" component={LogInFormContainer}/>

    </div>
);

export default App;