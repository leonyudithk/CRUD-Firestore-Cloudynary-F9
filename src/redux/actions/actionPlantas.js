import { addDoc, collection } from "firebase/firestore"
import { baseDato } from "../../Firebase/firebaseConfig"
import { typesPlantas } from "../types/types"



//-------------agregar---------------//
export const addAsync =(planta)=>{
    return(dispatch)=>{
        addDoc(collection(baseDato, "plantasBD"), planta)
        .then(resp =>{
            dispatch(addSync(planta))
            //------dispatch(listar)
        })
        .catch(error=>{
            console.warn(error);
        })
}
}

export const addSync =(planta)=>{
    return{
        type: typesPlantas.add,
        payload: planta,
    }
}