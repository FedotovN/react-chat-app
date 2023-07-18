import {useState} from 'react'
import IMessageItemProps from '../../interfaces/props/IMessageItemProps'
import useMessages from '../../hooks/useMessages'
import useAuth from '../../hooks/useAuth'
import BaseInput from "../UI/Input/BaseInput"
import BaseButton from "../UI/Button/BaseButton"
import BaseLoader from "../UI/Loader/BaseLoader"

export default function MessageForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [ message, setMessage ] = useState('')
    const { sendMessage } = useMessages()
    const { user } = useAuth()
    async function onCreateButtonClick(): Promise<void> {
        if(!message || isLoading) return

        setIsLoading(true)
        if(user) {
            const newMessage: IMessageItemProps = {
                created_at: new Date(),
                author_uid: user?.uid,
                author_photo_url: user.photoURL || '',
                author_displayName: user.displayName || user?.uid,
                body: message,
                id: Math.random() + ''
            }
            await sendMessage(newMessage)
        }
        else {
            console.warn('User not authenticated')
        }

        setIsLoading(false)
        setMessage('')
      }

    return (
        <form className="flex justify-between items-end w-full" onSubmit={(e) => e.preventDefault()}>
          <BaseInput
            autoFocus
            className='pr-2'
            placeholder='New message...'
            value={ message }
            onInput={(value) => setMessage(value)} /> 
          <BaseButton
          disabled={isLoading}
          onClick={onCreateButtonClick}
          className='w-32 h-[32.5px]'>
            {isLoading
              ? <BaseLoader size='small' borderColor='border-white'></BaseLoader>
              : 'Send'
            }
          </BaseButton>
        </form>
    )
}