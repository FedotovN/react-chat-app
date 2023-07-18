import FirebaseService from "../services/firebase.service";
import { auth } from "../api/firebase.config";
import { onAuthStateChanged, User } from "firebase/auth";
import { useState, useEffect, useMemo } from 'react'

export default function useAuth(
    onLogin?: (user?: User) => void
) {
    const [user, setUser] = useState(auth.currentUser)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        const unsub = onAuthStateChanged(auth, user => {
            setUser(user)
            setIsLoading(false)
        })
        return () => unsub()
    }, [])

    const googleLogin = async () => {
        const credentials = await FirebaseService.signInWithGoogle()
        if(onLogin) {
            onLogin(credentials)
        }
    }

    return { user, isLoading, googleLogin }
}