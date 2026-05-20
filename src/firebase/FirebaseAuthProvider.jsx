import { useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase.init";
const provider = new GoogleAuthProvider();

const FirebaseAuthProvider = ({ children }) => {
  // set user
  const [user, setUser] = useState(null);
  // set Loading
  const [loading, setLoading] = useState(true);

  // signUpUser
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signInUser
  const signInUser = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsusCribe = onAuthStateChanged(auth, (crueentUser) => {
      setUser(crueentUser);
      setLoading(false);
      console.log(crueentUser);
    });

    return () => unsusCribe();
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateProfileUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    signUpUser,
    signInUser,
    signInWithGoogle,
    logOut,
    updateProfileUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
