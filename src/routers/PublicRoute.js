import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
 //destructure component and auth to get them into the route
export const PublicRoute = (
    {isAuthenticated, 
    component: Component,
    ...rest //other props avaialbe
    }
    ) => {
    return (
        <Route {...rest} component={(props)=>(
            //if authenticated
            isAuthenticated ? (
            <Redirect to="/dashboard"/>
            ) : (
            <div>
                {/* <Header /> */}
                <Component {...props}/>
            </div>
            )
        )}/>
    )
};

const mapStateToProps = (state) => {
    return  {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(PublicRoute);