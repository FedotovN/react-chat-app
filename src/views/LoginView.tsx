import {useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import BaseButton from "../components/UI/Button/BaseButton"
export default function LoginView() {
    const navigate = useNavigate()
    const { googleLogin } = useAuth(()=>{
        navigate('/chat')
    })
    return (
        <div className="flex flex-col w-full">
            <h1>Log In to use chat</h1>
            <BaseButton onClick={ () => googleLogin() }>Вход</BaseButton>
        </div>
    )
}