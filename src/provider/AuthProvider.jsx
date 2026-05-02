import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth)
    }

    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    })
    const AuthData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
    }
    return <AuthContext value={AuthData}>{children}</AuthContext>
}

export default AuthProvider