import { useState, useEffect } from 'react';
import data from "./api/data.json"
import BaseLoader from './components/UI/Loader/BaseLoader';
import MessageForm from './components/Messages/MessageForm';
import MessagesList from './components/Messages/MessagesList/MessagesList';
import "./index.css"
import IMessageItemProps from './interfaces/props/IMessageItemProps';

function App() {
  const [messages, setMessages] = useState([] as IMessageItemProps[])
  const [isMessagesLoading, setIsMessagesLoading] = useState(false)

  useEffect(() => {
    setIsMessagesLoading(true)
    const fetchMessages = async () => {
       return await new Promise((res, rej) => {
        setTimeout(() => {
          res(data)
        }, 600)
       }) 
    } 

    fetchMessages()
      .then((res) => {
        const result: IMessageItemProps[] = res as IMessageItemProps[]
        setMessages(result)
      })
      .catch(e => {
        console.warn(e)
      })
      .finally(() => {
        setIsMessagesLoading(false)
      })
  }, [])

  return (
    <div className="flex h-screen w-full justify-center py-2">
      <div className="flex flex-col gap-2 w-full items-center max-w-xl h-full">
        <h1 className="font-semibold text-xl tracking-wide text-gray-700">Chat Application</h1>
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
    </div>
  )
}

export default App;
