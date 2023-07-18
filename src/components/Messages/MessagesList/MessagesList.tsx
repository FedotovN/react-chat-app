import { useLayoutEffect, useRef } from 'react'
import classes from "./MessagesList.module.scss"
import MessageItem from "../MessageItem"
import useMessages from '../../../hooks/useMessages'
export default function MessagesList(
 {
    autoScroll = true,
 }: {
    autoScroll?: boolean
 }   
) {
  const messagesBox = useRef<HTMLDivElement>(null)
  const { messages } = useMessages()

  useLayoutEffect(() => {
    if(messagesBox.current) {
      if(autoScroll) {
        messagesBox.current.scrollTo({ 
          top: messagesBox.current.scrollHeight,
          behavior: 'smooth' })
      }
    }
  }, [messages])


    return (
      <div
      ref = { messagesBox }
      className={`
      ${classes.messagesList}  flex flex-col w-full gap-2 overflow-y-scroll h-full pr-2`}>
        {messages.length
        ? messages.map(message => {
          return (
            <MessageItem
            key={message.id}
            message={message}
             />
          )
        })
        : <div className="flex flex-col h-full w-full justify-center items-center">
            <p className="text-gray-500 text-sm">No messages yet! Be the first one! ✍️</p>
          </div>
      }
      </div>
      )
}