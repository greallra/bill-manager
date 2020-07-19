import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth'

export function LoginPage(props) {
    return <div className="box_layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Bill Manger</h1>
            <p>Get your bills under control</p>
            <button onClick={props.startLogin}>
                login

            </button>
        </div>
    </div>
}

const mapDispatchToProps =(dispatch)=>{
    return {
        startLogin: ()=>dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage);