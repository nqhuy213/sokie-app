import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

type Props = {}

export default function RegisterPage({}: Props) {
  const handleOnClick = async () => {
    const auth = getAuth()
    const response = await createUserWithEmailAndPassword(auth, 'nqhuy213@gmail.com', 'huybeo213')
  }

  return <button onClick={handleOnClick}>Create</button>
}
