import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // on state change
   useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('on state change',currentUser)
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        return unSubscribe;
    }
   },[])

    // google signUp
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // register section
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign in

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // log out

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

   const authInfo ={
    user,
    loading,
    googleLogin,
    createUser,
    signIn,
    logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.element.isRequired  
  };
export default AuthProvider;