import React, { createContext, useEffect, useState } from 'react';
// import auth from '../firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import {app} from "../../firebase/Firebase.init"
export const AuthProviderContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    


const  name = 'habijabi';

const createUser = (email, password ) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

const loginUser = (email, password ) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
}

const updateUserProfile = (updatedData) =>{
    return updateProfile(auth.currentUser, updatedData );
}

useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
        setLoading(false)
        })
        return () => {
            unSubscribe();
        }

} ,[])

const authInfo = {
    name,
    updateUserProfile,
    user,
    setUser,
    loading,
    createUser,
    loginUser,
    signOutUser
}
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;