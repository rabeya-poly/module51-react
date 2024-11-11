import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()

    const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    //    onAuthStateChanged(auth, currentUser =>{
    //     if(currentUser){
    //         console.log('currently logged IN',createUser);
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('No user logged IN');
    //         setUser(null)
    //     }
    //    })

     const signInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
     }
     

     const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
     }
     
      const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth);
      }

     

    useEffect(()=>{
    const unSubscribe  =  onAuthStateChanged(auth, user=>{
            console.log('current User',user);
            setUser(user)
            setLoading(false)
        })
        return()=>{
            unSubscribe();
        }
    },[])



    const authInfo = {
        
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {/* main part */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
