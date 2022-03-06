import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { signInWithFacebook, signInWithGoogle } from '../../firebase-config'

export default function LoginPage() {
  const handleLogin = async () => {
    const auth = getAuth()
    const response = await signInWithEmailAndPassword(auth, 'nqhuy213@gmail.com', 'huybeo213')
    console.log(response)
  }

  const handleLoginWithGoogle = async () => {
    const response = await signInWithGoogle()
    console.log(response)
  }
  const handleLoginWithFacebook = async () => {
    const response = await signInWithFacebook()
    console.log(response)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>;
      <button onClick={handleLoginWithGoogle}>Login with email</button>
      <button onClick={handleLoginWithFacebook}>Login with facebook</button>
    </div>
  )
}
