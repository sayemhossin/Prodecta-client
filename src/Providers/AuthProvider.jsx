import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name) => {

        return updateProfile(auth.currentUser, {
            displayName: name,

        })


    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {

            setLoading(false)
            setUser(user)


        })
        return () => {
            unSubscribe()
        }
    }, [])


    if (loading) return <p>Loading...</p>

    const authInfo = {
        createUser,
        signIn,
        user,
        logOut,
        updateUserProfile,
        loading,
        googleLogin,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};



AuthProvider.propTypes = {
    children: PropTypes.node
}


export default AuthProvider;