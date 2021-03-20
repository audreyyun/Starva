import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {AuthRoute, ProtectedRoute} from '../util/route_utils';
import SplashPage from './splash_page/splash_page';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import DashboardIndexContainer from './dashboard/dashboard_container';

import RouteMapContainer from './RouteMap/route_map_container';
import RouteMapEditContainer from './RouteMap/route_map_edit_container';
import RouteIndexItemContainer from './Route/route_index_item_container';
import RouteShowContainer from './Route/route_show_container';
// import NavbarContainer from './Navbar/navbar_container';
import SearchContainer from './Search/SearchContainer';

const App = () => (
    <>

        <Route exact path="/" component={SplashPage}/>

        <AuthRoute path="/signup" component={SignUpFormContainer}/>
        <AuthRoute path="/login" component={LogInFormContainer}/>

        <ProtectedRoute exact path="/dashboard" component={DashboardIndexContainer}/>
        <Switch>
            <ProtectedRoute exact path="/routes/new" component={RouteMapContainer}/>
            <ProtectedRoute exact path="/routes/:routeId" component={RouteShowContainer}/>
            <ProtectedRoute exact path="/routes/:routeId/view" component={RouteIndexItemContainer}/>
            <ProtectedRoute exact path="/routes/:routeId/edit" component={RouteMapEditContainer}/>
            <ProtectedRoute exact path="/routes/" component={SearchContainer}/>
            {/* <ProtectedRoute exact path="/upload/manual" component={ManualActivityContainer}/> */}
        </Switch>
    </>
);

export default App;