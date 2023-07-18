import { firestore } from "../api/firebase.config";
import { onSnapshot, setDoc, doc, Unsubscribe, collection, QuerySnapshot, DocumentData } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../api/firebase.config";
export default class FirebaseService {  

    public static async signInWithGoogle() {
        const provider = new GoogleAuthProvider()
        return (await signInWithPopup(auth, provider)).user
    }
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