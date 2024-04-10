
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const getUserFromFirebase = async () => {

    let userRef = collection(db, "user")

    const querySnapshot = await getDocs(userRef);

    let user = [];

    querySnapshot.forEach((doc) => {

        let d = doc.data();
        d.id = doc.id

        user.push(d)


    });

    return user

}
export const addUserToFirebase = async (user) => {

    let userRef = collection(db, "user")

    const docRef = await addDoc(userRef, user);
    console.log("Document written with ID: ", docRef.id);



}

export const deleteUserToFirebase = async (user) => {
     await deleteDoc(doc(db, "user", user.id))

}

export const updateUserToFirebase = async (user,id) => {
    const userRef = doc(db, "user",id);
    await updateDoc(userRef,user);

}
