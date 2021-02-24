import React from 'react';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Route } from 'react-router-dom';
import DashboardIndexContainer from './dashboard/dashboard_container';
import RouteIndexContainer from './Route/route_index_container';
import RouteMapContainer from './RouteMap/route_map_container';
// import NavbarContainer from './Navbar/navbar_container';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';
import SplashPage from './splash_page/splash_page';
import SearchContainer from './Search/SearchContainer';

const App = () => (
    <div>
        <Route exact path="/" component={SplashPage}/>
        <ProtectedRoute exact path="/dashboard" component={DashboardIndexContainer}/>
        <ProtectedRoute exact path="/routes/new" component={RouteMapContainer}/>
        {/* <ProtectedRoute exact path="/routes" component={RouteIndexContainer}/> */}
        <ProtectedRoute exact path="/routes/" component={SearchContainer}/>
        <AuthRoute path="/signup" component={SignUpFormContainer}/>
        <AuthRoute path="/login" component={LogInFormContainer}/>
    </div>
);

export default App;