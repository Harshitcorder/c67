import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyAHMdnT4NuKZT6TW5j0ni21CjbzfsAdtbA",
        authDomain: "c67-project-48c5a.firebaseapp.com",
        projectId: "c67-project-48c5a",
        databaseURL:"https://c67-project-48c5a-default-rtdb.firebaseio.com/",
        storageBucket: "c67-project-48c5a.appspot.com",
        messagingSenderId: "1033127135538",
        appId: "1:1033127135538:web:ab104d04e889fc335aef2b"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();