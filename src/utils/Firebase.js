import * as firebase from 'firebase';
import 'firebase/firestore';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid'
//import uuid from 'react-native-uuid';

const firebaseConfig = {
    apiKey: "AIzaSyDG059G5IDq-ToduqzEX2DOq4-RcGwQs_4",
    authDomain: "mmtest-2bcb1.firebaseapp.com",
    databaseURL: "https://mmtest-2bcb1.firebaseio.com",
    projectId: "mmtest-2bcb1",
    storageBucket: "mmtest-2bcb1.appspot.com",
    messagingSenderId: "98634539783",
    appId: "1:98634539783:web:beab996572644a8c931ba2",
};
const Firebase = {
    loginWithEmail: (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
      },
      signupWithEmail: (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
      },
      signOut: () => {
        return firebase.auth().signOut()
      },
      checkUserAuth: user => {
        return firebase.auth().onAuthStateChanged(user)
      },
      // firestore
      createNewUser: userData => {
        return firebase
          .firestore()
          .collection('users')
          .doc(`${userData.uid}`)
          .set(userData)
      },
    uploadPost: post => {
        let user = firebase.auth().currentUser
        const id = uuidv4()
        const uploadData = {
          uid: user.uid,
          id: id,
          postPhoto: post.photo,
          postTitle: post.title,
          postDescription: post.description,
          likes: []
        }
        return firebase
          .firestore()
          .collection('posts')
          .doc(id)
          .set(uploadData)
      },

      getPosts: () => {
        return firebase
          .firestore()
          .collection('posts')
          .get()
          .then(function(querySnapshot) {
            let posts = querySnapshot.docs.map(doc => doc.data())
            // console.log(posts)
            return posts
          })
          .catch(function(error) {
            console.log('Error getting documents: ', error)
          })
      },

      getUserPosts: () => {
        let user = firebase.auth().currentUser
        return firebase
          .firestore()
          .collection('posts')
          .where('uid', '==', user.uid)
          .get()
          .then(function(querySnapshot) {
            let posts = querySnapshot.docs.map(doc => doc.data())
            return posts
          })
          .catch(function(error) {
            console.log('Error getting documents: ', error)
          })
      },
      signOut: () => {
        return firebase.auth().signOut()
      },

      getUserDetails: () => {
        let user = firebase.auth().currentUser
        return firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .get()
          .then(function(doc) {
            let userDetails = doc.data()
            return userDetails
          })
          .catch(function(error) {
            console.log('Error getting documents: ', error)
          })
      },

      uploadAvatar: avatarImage => {
        let user = firebase.auth().currentUser
      
        return firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .update({
            avatar: avatarImage
          })
      },

  };
  
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }



export default Firebase;