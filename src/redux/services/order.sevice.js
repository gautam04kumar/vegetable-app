
import { collection, addDoc, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const getOrderFromFirebase = async () => {

    let orderRef = collection(db, "orders")

    const querySnapshot = await getDocs(orderRef);

    let orders = [];

    querySnapshot.forEach((doc) => {

        let d = doc.data();
        d.id = doc.id

        orders.push(d)

 
    });

    return orders

}
export const placeOrderToFirebase = async (order,cart) => {
    let cartId = localStorage.getItem('cart_id')
    
        const cartRef = doc(db, "cart",cartId);
        await updateDoc(cartRef,cart);
    
        let orderRef = collection(db, "orders")
        const docRef = await addDoc(orderRef, order);
        
   






}


