import firebase from 'firebase/app'
import "firebase/database"

var config = {
    apiKey: "AIzaSyB4g976RkPH14yKqk8_RyEaw0VuBK_Wws8",
    authDomain: "innovfocus-blog.firebaseapp.com",
    databaseURL: "https://innovfocus-blog-default-rtdb.firebaseio.com",
    projectId: "innovfocus-blog",
    storageBucket: "innovfocus-blog.appspot.com",
    messagingSenderId: "853028909949",
    appId: "1:853028909949:web:d6a9b92451489e2a3f5214"
 
}
firebase.initializeApp(config)
const databaseRef = firebase.database().ref();
const blogsRef =  databaseRef.child("blogs")
export  {blogsRef, databaseRef} 
export default firebase;