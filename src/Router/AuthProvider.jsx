import { createContext } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    // google signUp
    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }

   const authInfo ={
    googleLogin,
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