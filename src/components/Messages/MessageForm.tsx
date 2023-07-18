import {useState} from 'react'
import IMessageItemProps from '../../interfaces/props/IMessageItemProps'
import BaseInput from "../UI/Input/BaseInput"
import BaseButton from "../UI/Button/BaseButton"
import BaseLoader from "../UI/Loader/BaseLoader"

export default function MessageForm({
    onNewMessage
}: {
    onNewMessage: (message: IMessageItemProps) => void
}) {
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function onCreateButtonClick(): Promise<void> {
        if(!message || isLoading) return

        setIsLoading(true)
        const newMessage: IMessageItemProps = await new Promise((res, rej) => {
          setTimeout(() => {
            res({
              author_uid: Math.random() + "",
              body: message,
              id: Math.random() + ''
            })
          }, 1000)
        })
        setIsLoading(false)
        setMessage('')
        onNewMessage(newMessage)
      }

    return (
        <form className="flex justify-between items-end w-full" onSubmit={(e) => e.preventDefault()}>
          <BaseInput
            autoFocus
            className='pr-2'
            placeholder='Введите сообщение'
            value={ message }
            onInput={(value) => setMessage(value)} /> 
          <BaseButton
          disabled={isLoading}
          onClick={onCreateButtonClick}
          className='w-32 h-[32.5px]'>
            {isLoading
              ? <BaseLoader size='small' borderColor='border-white'></BaseLoader>
              : 'Отправить'
            }
          </BaseButton>
        </form>
    )
}