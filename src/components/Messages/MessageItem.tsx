import IMessageItemProps from "../../interfaces/props/IMessageItemProps"
export default function MessageItem({
    author_uid,
    body,
    id
}: IMessageItemProps) {
    return (
        <div className="flex gap-2 items-center border shadow rounded px-2 py-1 ">
        <div className="min-h-[50px] min-w-[50px] bg-gray-200 rounded-full overflow-hidden">
            {false ? <img src='' alt="" /> : ''}
        </div>
        <div className="flex flex-col gap-2 w-full min-h-[75px] justify-center overflow-hidden">
            <small className="font-semibold text-xs tracking-wide text-gray-500">{author_uid}</small>
            <p className="text-sm tracking-wide text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">{body}</p>
        </div>
        </div>
    )
}