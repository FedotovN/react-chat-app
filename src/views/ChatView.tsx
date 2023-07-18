import BaseLoader from '../components/UI/Loader/BaseLoader';
import MessageForm from '../components/Messages/MessageForm';
import MessagesList from '../components/Messages/MessagesList/MessagesList';
import IMessageItemProps from '../interfaces/props/IMessageItemProps';
import useAuth from '../hooks/useAuth';
import { useState } from 'react'

export default function ChatView() {
    const [messages, setMessages] = useState([] as IMessageItemProps[])
    const [isMessagesLoading, setIsMessagesLoading] = useState(false)

    const { user } = useAuth()
    return (
        <div className="flex flex-col gap-2 w-full items-center max-w-xl h-full">
            <h1 className="font-semibold text-xl tracking-wide text-gray-700">{
                'Welcome to chat, ' + user?.displayName
            }</h1>
            {
            isMessagesLoading 
            ? <div className="flex flex-col gap-2 w-full justify-center items-center flex-1">
                <BaseLoader size="large" />
                <small className="text-sm text-gray-500">Загрузка сообщений</small>
                </div>
            : <div className="flex flex-col gap-1 w-full flex-1 h-full overflow-hidden">
                <MessageForm onNewMessage={ (message) => {setMessages([...messages, message]) } }></MessageForm>
                <MessagesList messages={ messages }></MessagesList>
            </div>
            }
        </div>
    )
}