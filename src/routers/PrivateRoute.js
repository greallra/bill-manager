import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { divide } from 'numeral';
import Header from '../components/Header';
 //destructure component and auth to get them into the route
export const PrivateRoute = (
    {isAuthenticated, 
    component: Component,
    ...rest //other props avaialbe
    }
    ) => {
    return (
        <Route {...rest} component={(props)=>(
            //if authenticated
            isAuthenticated ? (
            <div>
                <Header />
                <Component {...props}/>
            </div>
            ) : (
            //if not authenticated
            <Redirect to="/"/>
            )
        )}/>
    )
};

const mapStateToProps = (state) => {
    return  {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(PrivateRoute);