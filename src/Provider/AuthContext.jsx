import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'

// import { getRole } from '../api/auth'
import { app } from '../firebase/firebase.config'
// import { getRole } from '../api/auth'
import { theRole } from '../api/IdentifyRole'


export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
 
const roleGot=theRole(user?.email)
const whatTherole=roleGot?.role
console.log(whatTherole)
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }



  const signInWithGoogle = () => {
    setLoading(true)

    return signInWithPopup(auth, googleProvider)

  }

  const resetPassword = email => {
    setLoading(true)
    console.log(email)

    return sendPasswordResetEmail(auth, email)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
// fetch all data

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
     if(currentUser?.email){
      fetch(`http://localhost:5000/jwt`,{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify({email: currentUser?.email })
      
      }).then(res=>res.json())
      .then(data=>{
        localStorage.setItem('access-token', data.token)
        setLoading(false)
        console.log(data)
      })
     }
     else {
      localStorage.removeItem('access-token')
      setLoading(false)
     }
      console.log('current user', currentUser)
     
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
    whatTherole

    // role,setRole
  }
  console.log(user)

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
