import { useLayoutEffect, useRef } from 'react'
import classes from "./MessagesList.module.scss"
import IMessageItemProps from "../../../interfaces/props/IMessageItemProps"
import MessageItem from "../MessageItem"
export default function MessagesList(
 {
    messages,
    autoScroll = true,
 }: {
    messages: IMessageItemProps[],
    autoScroll?: boolean
 }   
) {
  const messagesBox = useRef<HTMLDivElement>(null)


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
        {messages.map(message => {
          return (
            <MessageItem
            key={message.id}
            id={message.id}
            author_uid={message.author_uid}
            body={message.body} />
          )
        })}
      </div>
      )
}