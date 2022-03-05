import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default function LoginPage() {
  const handleLogin = async () => {
    const auth = getAuth()
    const response = await signInWithEmailAndPassword(auth, 'nqhuy213@gmail.com', 'huybeo213')
    console.log(response)
  }

  return (
    <div>
      <button>Log user</button>
      <button onClick={handleLogin}>Login</button>;
    </div>
  )
}
