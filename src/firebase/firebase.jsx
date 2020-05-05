import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDT9NqbnD4soNlA01apXLA2PV9RmE0tJw8",
    authDomain: "gangez-with-1818.firebaseapp.com",
    databaseURL: "https://gangez-with-1818.firebaseio.com",
    projectId: "gangez-with-1818",
    storageBucket: "gangez-with-1818.appspot.com",
    messagingSenderId: "857841871216",
    appId: "1:857841871216:web:7923b5abeea3fe83a3c7b5",
    measurementId: "G-WFQLLXCNMK"
}
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth , additionalData) =>{
    if(!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

     const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName , email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName ,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user' , error.message)
        }
    }

    return userRef ;
}
export const createFoodDocument = (collection) => {
    const transformCollection = collection.docs.map(doc =>{
        const {title , items , imageUrl , MoreFood , price , routeName} = doc.data();

        return {
            routeName ,
            id : doc.id,
            items,
            imageUrl,
            MoreFood,
            price,
            title,

        }
    })
    
    return transformCollection.reduce((acumalteur , collection) => {
        acumalteur[collection.routeName] = collection ;
        return acumalteur
        
    }, {})
    
}


export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
