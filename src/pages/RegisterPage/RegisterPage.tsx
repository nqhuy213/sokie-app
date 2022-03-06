import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth'

export default function RegisterPage() {
  const handleOnClick = async () => {
    const auth = getAuth()
    const response = await createUserWithEmailAndPassword(auth, 'nqhuy213@gmail.com', 'huybeo213')
    // tslint:disable-next-line: no-console
    await sendEmailVerification(response.user)
    console.log(response)
  }

  return <button onClick={handleOnClick}>Create</button>
}
