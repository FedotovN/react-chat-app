import { Timestamp } from "firebase/firestore";
import IMessageItemProps from "../interfaces/props/IMessageItemProps";
import FirebaseService from "../services/firebase.service";
import { useState, useEffect } from "react";
export default function useMessages() {
    const [ messages, setMessages ] = useState([] as IMessageItemProps[])
    const [ isMessagesLoading, setIsMessagesLoading ] = useState(true)
    useEffect( () => {
        const q = FirebaseService.createOrderByQuery('created_at', '/messages')
        const unsub = FirebaseService.setRealtimeCollectionListener((snapshot) => {
            setIsMessagesLoading(false)
            const messages = snapshot.docs.map(doc => {
                const message = doc.data() as IMessageItemProps

                if(message.created_at instanceof Timestamp) {
                    message.created_at = message.created_at.toDate()

                }

                return message
            })
            setMessages( messages )
        }, q)
        return () => unsub()
    }, [])

    async function sendMessage(message: IMessageItemProps) {
        await FirebaseService.sendDocumentToCollection(message, `/messages/${message.id}`)
    }

    return { messages, sendMessage, isMessagesLoading }
}