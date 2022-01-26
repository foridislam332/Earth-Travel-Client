import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuth from "../Pages/Login/Firebase/firebase.init";

firebaseAuth()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState('');

    const auth = getAuth();
    // google sign in
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = (location, navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                const destination = location?.state?.from || "/home";
                navigate(destination);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    // Register New User
    const registerUser = (name, email, password, location, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                // saveUser(email, name, 'POST')
                // add user name
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                const destanition = location?.state?.from || '/';
                navigate(destanition)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));

    }

    // Email password login
    const passwordLoginUser = (email, password, location, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destanition = location?.state?.from || '/';
                navigate(destanition)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    // Observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    };

    return {
        user,
        googleSignIn,
        logOut,
        passwordLoginUser,
        registerUser,
        isLoading,
        error
    }
};

export default useFirebase;