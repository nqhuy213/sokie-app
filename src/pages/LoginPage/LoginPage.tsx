import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

type Props = {}

export default function LoginPage({}: Props) {
  const handleLogin = async () => {
    const auth = getAuth()
    const response = await signInWithEmailAndPassword(auth, 'nqhuy213@gmail.com', 'huybeo213')
  }

  return (
    <div>
      <button>Log user</button>
      <button onClick={handleLogin}>Login</button>;
    </div>
  )
}
