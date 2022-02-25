import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

type Props = {};

export default function RegisterPage({}: Props) {
  const handleOnClick = async () => {
    console.log("sdfsdf");
    try {
      const auth = getAuth();
      const response = await createUserWithEmailAndPassword(
        auth,
        "nqhuy213@gmail.com",
        "huybeo213"
      );
      console.log(response.user.email);
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={handleOnClick}>Create</button>;
}
