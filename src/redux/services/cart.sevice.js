
import { collection, addDoc, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const getCartFromFirebase = async () => {

    let cartRef = collection(db, "cart")

    const querySnapshot = await getDocs(cartRef);

    let cart = {
        customer: {},
        items: [],
        subTotal: 0,
        tax: 0,
        grandTotal: 0,
        orderPlaced: false
    }

    querySnapshot.forEach((doc) => {
        let cartId = localStorage.getItem('cart_id')

        console.log(doc.data())
        if (doc.id === cartId) {
            cart = doc.data();
        }

    });

    return cart

}
export const addCartToFirebase = async (cart) => {
    let cartId = localStorage.getItem('cart_id')

    if (cartId) {
        const cartRef = doc(db, "cart",cartId);
        await updateDoc(cartRef,cart);
    } else {
        let cartRef = collection(db, "cart")
        const docRef = await addDoc(cartRef, cart);
        localStorage.setItem('cart_id', docRef.id)
    }






}


