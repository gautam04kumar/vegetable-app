
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

export const getcategoryFromFirebase = async () => {

    let categoryref = collection(db, "category")

    const querySnapshot = await getDocs(categoryref);

    let category = [];

    querySnapshot.forEach((doc) => {

        let d = doc.data();
        d.id = doc.id

        category.push(d)
       

    });
    
    return category
 
}
export const addcategoryToFirebase = async (category) => {

    let categoryref = collection(db, "category")

    const docRef = await addDoc(categoryref, category);
    console.log("Document written with ID: ", docRef.id);


}