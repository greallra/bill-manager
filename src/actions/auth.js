import {firebase, googleAuthProvider} from '../firebase/firebase';

export const login = (uid) =>({
    type: 'LOGIN',
    uid
})

export const startLogin = ()=>{
    return (dispatch)=>{
        //call firebase method
        return firebase.auth().signInWithRedirect(googleAuthProvider);
    }
}

export const logout = () =>({
    type: 'LOGOUT'
})


export const startLogout = ()=>{
    return (dispatch)=>{
        //call firebase method
        return firebase.auth().signOut();
    }
}