import { firestore } from "../api/firebase.config";
import { onSnapshot, setDoc, doc, Unsubscribe, collection, QuerySnapshot, DocumentData } from "firebase/firestore";

export default class FirebaseService {  
    public static async sendDocumentToCollection(document: object, newDocumentURL: string) {
        const documentReference = doc(firestore, newDocumentURL)
        await setDoc(documentReference, document)
    }                                   
    public static setRealtimeCollectionListener(callback: (snapshot: QuerySnapshot<DocumentData>) => void, collectionURL: string): Unsubscribe {
        const collectionReference = collection(firestore, collectionURL)
        const unsubFunc = onSnapshot(collectionReference, snapshot => {
            callback(snapshot)
        })
        return unsubFunc
    }
}