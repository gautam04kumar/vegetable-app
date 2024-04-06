
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const getProductFromFirebase = async () => {

    let productRef = collection(db, "product")

    const querySnapshot = await getDocs(productRef);

    let product = [];

    querySnapshot.forEach((doc) => {

        let d = doc.data();
        d.id = doc.id

        product.push(d)


    });

    return product

}
export const addProductToFirebase = async (product) => {

    let productRef = collection(db, "product")

    const docRef = await addDoc(productRef, product);
    // console.log("Document written with ID: ", docRef.id);



}

export const deleteProductToFirebase = async (product) => {
    const docRef = await deleteDoc(doc(db, "product", product.id))

}

export const updateProductToFirebase = async (product,id) => {
    const productRef = doc(db, "product",id);
    await updateDoc(productRef,product);

}
