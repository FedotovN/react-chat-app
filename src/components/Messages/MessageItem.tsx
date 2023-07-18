import { Timestamp } from "firebase/firestore"
import IMessageItemProps from "../../interfaces/props/IMessageItemProps"
export default function MessageItem(
    {
        message,
        ...props
    }: {
        message: IMessageItemProps    
    }) {

    function getFilteredDate(date: Date | Timestamp) {
        if(date instanceof Timestamp)
        date = date.toDate()
        return Intl.DateTimeFormat(
            'RU-ru', {
                hour: '2-digit',
                minute: '2-digit'
            }
        ).format(date)
    }

    return (
        <div className="flex gap-2 items-center border-b rounded px-2 py-1 ">
        <div className="min-h-[30px] min-w-[30px] h-[30px] w-[30px] bg-gray-200 rounded-full overflow-hidden">
            {message.author_photo_url ? <img src={message.author_photo_url} alt="" /> : ''}
        </div>
        <div className="flex flex-col gap-2 w-full min-h-[75px] justify-center overflow-hidden">
            <div className="flex justify-between">
                <small className="font-semibold text-xs tracking-wide text-gray-500">{message.author_displayName}</small>
                <small className="font-semibold text-xs tracking-wide text-gray-500">{getFilteredDate(message.created_at)}</small>
            </div>
            <p className="text-sm tracking-wide text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">{message.body}</p>
        </div>
        </div>
    )
}