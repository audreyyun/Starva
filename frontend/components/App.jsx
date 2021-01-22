import React from 'react';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Route } from 'react-router-dom'
import DashboardIndex from './dashboard/dashboard_index'
import NavbarContainer from './nav_bar/navbar_container';
import {AuthRoute, ProtectedRoute} from '../util/route_utils'
import SplashPage from './splash_page/splash-page';

const App = () => (
    <div>
        <Route exact path="/" component={SplashPage}/>
        <AuthRoute path="/signup" component={SignUpFormContainer}/>
        <AuthRoute path="/login" component={LogInFormContainer}/>
    </div>
);

export default App;