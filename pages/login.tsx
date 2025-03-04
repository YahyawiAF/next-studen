import Logo from '../public/image.webp'
import Bg from '../public/login-background.jpg'
import {FaChevronRight} from 'react-icons/fa'
import LoginSideBar from '../components/LoginSideBar'
import LoginContent from '../components/LoginContent'

function Login() {
  return (
    <div className="w-full h-screen flex flex-row">
        <LoginSideBar />
        <LoginContent />
    </div>
  )
}

export default Login