/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  
  updateProfile,
} from 'firebase/auth'
import { app } from '../Firebase/firebase.config'
import axios from 'axios';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }


  // const logOut = async () => {
  //   setLoading(true);
  //   try {
  //     // Clear the JWT cookie on the server
  //     await axios.post('https://roomly-server-assignment11.vercel.app/logout', {}, { withCredentials: true });
  //     // Sign out the user from Firebase and return the promise
  //     return await signOut(auth);

  //     setUser(null);
  //   } catch (error) {
  //     console.error('Error during logout:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };








  const logOut = () => {
    setLoading(true);
    return signOut(auth);
}


  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {

      const userEmail = currentUser?.email || user?.email
      const loggedUser = {email : userEmail}
      setUser(currentUser)
      // console.log('CurrentUser-->', currentUser)
      setLoading(false)
      if(currentUser){
        
        axios.post('https://roomly-server-assignment11.vercel.app/jwt',loggedUser, { withCredentials: true })
        .then(res =>{
          // console.log('token res', res.data)
        })
      }else{
        axios.post('https://roomly-server-assignment11.vercel.app/logout', loggedUser, {withCredentials : true})
        .then((res) =>{
          // console.log(res.data)
        })
      }


    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    loginWithGoogle,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider