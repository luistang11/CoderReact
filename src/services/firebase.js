import { initializeApp } from "firebase/app";
import { addDoc,getFirestore,collection, getDocs,getDoc,doc,query, where} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-JEwEHm6FiJtoxtdKVsAIpBAS7InR4UI",
  authDomain: "the-scent-bc903.firebaseapp.com",
  projectId: "the-scent-bc903",
  storageBucket: "the-scent-bc903.appspot.com",
  messagingSenderId: "269211141404",
  appId: "1:269211141404:web:f32420ec536274eb5d26d9"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db=getFirestore(FirebaseApp)

export async function getItem(){
const collectionRef=collection(db,"Perfumes");
let results=await getDocs(collectionRef);

let dataCursos= results.docs?.map(doc=>{
    return {
        id:doc.id,
        ...doc.data()
    };
})
return dataCursos;
}

export async function getSingleItem(id){
const docRef=doc(db,"Perfumes",id);
const docResult= await getDoc(docRef);
if(docResult.exists()){
   return {
    id:docResult.id,
    ...docResult.data()
    }; 
}
};

export async function getItemByCategory(categoryID){
const collectionRef=collection(db,"Perfumes");
const queryCat=query(collectionRef,where("category","==",categoryID));
let result= await getDocs(queryCat);

let dataCursos=result.docs.map(doc => {
    return{
        id:doc.id,
        ...doc.data()
    }
})
return dataCursos;
}


export async function createBuyOrder(orderData){
    const collectionRef=collection(db,"orders");
    let respuesta= await addDoc(collectionRef,orderData);
    return respuesta.id;
}
export default FirebaseApp;