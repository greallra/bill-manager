import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({startLogout}) => (
  <header>
    <div className="banner">
      <h1>Bill Manager</h1>
      <button onClick={startLogout}>Logout</button>
    </div>
    {/* <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink> */}
    
  </header>
);

const mapDispatchToProps =(dispatch)=>(
  {
    startLogout:()=>dispatch(startLogout())
  }
)
export default connect(undefined, mapDispatchToProps)(Header);
