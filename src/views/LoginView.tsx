import {useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import BaseButton from "../components/UI/Button/BaseButton"
import logo from "../assets/icons8-google.svg"
export default function LoginView() {
    const navigate = useNavigate()
    const { googleLogin } = useAuth(()=>{
        navigate('/chat')
    })
    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="w-76 flex flex-col gap-2">
                <h1 className='text-xl'>Welcome to Chat Application! 👋</h1>
                <div className="w-64 flex flex-col gap-2">
                <p className="font-semibold text-gray-500">Let's quickly login</p>
                <BaseButton
                bgColor='bg-white'
                borderColor='border-blue-600'
                textColor='text-black'
                onClick={ () => googleLogin() }>
                    Log In using Google
                    <img src={logo} className="pl-2 h-[20px]"></img>
                </BaseButton>
                </div>
            </div>
        </div>
    )
}