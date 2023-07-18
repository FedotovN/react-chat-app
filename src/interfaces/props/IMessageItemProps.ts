import { Timestamp } from "firebase/firestore"

export default interface IMessageItemProps {
    author_uid: string,
    author_photo_url: string,
    author_displayName: string,
    created_at: Date | Timestamp,
    id: string,
    body: string
}