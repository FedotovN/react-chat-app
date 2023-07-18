import BaseLoader from '../components/UI/Loader/BaseLoader';
import BaseButton from '../components/UI/Button/BaseButton';
import MessageForm from '../components/Messages/MessageForm';
import MessagesList from '../components/Messages/MessagesList/MessagesList';
import useAuth from '../hooks/useAuth';
import useMessages from '../hooks/useMessages';
export default function ChatView() {
    const { user } = useAuth()
    const { isMessagesLoading } = useMessages()
    const { logout } = useAuth()
    return (
        <div className="flex flex-col gap-2 w-full items-center max-w-xl h-full">
            <div className="flex justify-between w-full items-center overflow-hidden">
                <div className="flex gap-2 items-center overflow-hidden">
                    <div className="flex justify-center items-center rounded-full h-[50px] w-[50px] min-h-[50px] min-w-[50px] overflow-hidden bg-gray-200">
                        {
                            user?.photoURL
                            ? <img src={ user.photoURL } className="object-cover" />
                            : ''
                        }
                    </div>
                    <div className="flex flex-col overflow-hidden">
                        <p className="text-sm text-gray-700 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{user?.displayName}</p>
                        <small className='text-xs text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis'>{user?.uid}</small>
                    </div>
                </div>
                <BaseButton onClick={ logout } bgColor="bg-red-600">Log out</BaseButton>
            </div>
            {
            isMessagesLoading 
            ? <div className="flex flex-col gap-2 w-full justify-center items-center flex-1">
                <BaseLoader size="large" />
                <small className="text-gray-500">Loading messages</small>
                </div>
            : <div className="flex flex-col gap-1 w-full flex-1 h-full overflow-hidden">
                <MessagesList></MessagesList>
                <MessageForm></MessageForm>
            </div>
            }
        </div>
    )
}