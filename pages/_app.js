import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'

import Login from '../components/Login'
import Loading from '../components/Loading'
import { useEffect } from 'react'
import { serverTimestamp } from '@firebase/firestore'

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      setDoc(
        doc(db, 'users', user.uid),
        {
          email: user.email,
          lastSeen: serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      )
    }
  }, [user])

  if (loading) return <Loading />

  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp
