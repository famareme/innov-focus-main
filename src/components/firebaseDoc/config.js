import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyB4g976RkPH14yKqk8_RyEaw0VuBK_Wws8",
  authDomain: "innovfocus-blog.firebaseapp.com",
  projectId: "innovfocus-blog",
  storageBucket: "innovfocus-blog.appspot.com",
  messagingSenderId: "853028909949",
  appId: "1:853028909949:web:d6a9b92451489e2a3f5214"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export { projectFirestore, projectStorage }