import { getAuth } from 'firebase/auth'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const handleLogout = () => {
    const auth = getAuth()
    auth.signOut()
  }
  return (
    <div>
      HomePage Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus
      laboriosam minima provident quo vel deserunt laborum magni enim corporis, distinctio corrupti
      ipsum dolores ratione ducimus adipisci vero. Error, aperiam?
      <Link to="/auth/login">Login</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
