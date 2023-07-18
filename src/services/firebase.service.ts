import { firestore } from "../api/firebase.config";
import { onSnapshot, setDoc, doc, Unsubscribe, collection, QuerySnapshot, DocumentData, Query, query, orderBy, limit, CollectionReference } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../api/firebase.config";
export default class FirebaseService {  

    public static async signInWithGoogle() {
        const provider = new GoogleAuthProvider()
        return (await signInWithPopup(auth, provider)).user
    }
    public static async logOut() {
        await auth.signOut()
    }
    public static async sendDocumentToCollection(document: object, newDocumentURL: string) {
        const documentReference = doc(firestore, newDocumentURL)
        await setDoc(documentReference, document)
    }                                   
    public static setRealtimeCollectionListener(
            callback: (snapshot: QuerySnapshot<DocumentData>) => void,
            collectionRef: string | Query
        ): Unsubscribe {
        const collectionReference: CollectionReference | Query = 
        collectionRef instanceof Query 
            ? collectionRef
            : collection(firestore, collectionRef)
        
        const unsubFunc = onSnapshot(collectionReference, snapshot => {
            callback(snapshot)
        })
        return unsubFunc
    }
    public static createOrderByQuery(key: string, collectionUrl: string, documentsLimit: number = 50): Query {
        const collectionReference = collection(firestore, collectionUrl)
        return query(collectionReference, orderBy(key), limit(documentsLimit))
    }
}