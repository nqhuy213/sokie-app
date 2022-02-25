import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

type Props = {};

export default function LoginPage({}: Props) {
  const handleLogin = async () => {
    try {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(
        auth,
        "nqhuy213@gmail.com",
        "huybeo213"
      );
      console.log(response.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={() => console.log("Log")}>Log user</button>
      <button onClick={handleLogin}>Login</button>;
    </div>
  );
}
