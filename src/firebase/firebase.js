import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAv5P5ty9ucDvyfKRr1RbFPN-ZCqhqAn-A",
  authDomain: "bill-manager-c95e5.firebaseapp.com",
  databaseURL: "https://bill-manager-c95e5.firebaseio.com",
  projectId: "bill-manager-c95e5",
  storageBucket: "bill-manager-c95e5.appspot.com",
  messagingSenderId: "634287790896",
  appId: "1:634287790896:web:cb6a1c46a7ae0ed99506f5"
};

firebase.initializeApp(config);

const database = firebase.database();


export { firebase, database as default };

