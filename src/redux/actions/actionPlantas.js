import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { baseDato } from "../../Firebase/firebaseConfig"
import { typesPlantas } from "../types/types"

//---------------------Edit-----------//
export const editAsync = (codigo, planta)=>{
    console.log(codigo, planta)
    return async (dispatch)=>{
        const  colleccionTraer = collection(baseDato, "plantasBD")
        const q = query(colleccionTraer, where("codigo", "==", codigo))
        const traerDatosQ = await getDocs(q)
        let id
        traerDatosQ.forEach( async (docu)=>{
            id= docu.id
        })
        console.log(id)

        const documenRef = doc(baseDato, "plantasBD", id)
        await updateDoc(documenRef, planta)
        .then(() =>
        listAsyn())
        .catch((err) => console.log(err))
        console.log(documenRef)
    }
}


export const editSync = (planta)=>{
    return{
        type: typesPlantas.editSync,
        payload: planta
    }
   
}

//-------------------delete--------------------//
export const deleteAsync = (codigo)=>{
  
    return async (dispatch)=>{
        const  colleccionTraer = collection(baseDato , "plantasBD")
        const q = query(colleccionTraer, where("codigo", "==", codigo))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum =>{
            deleteDoc(doc(baseDato, "plantasBD", docum.id))
        }))
        dispatch(deleteSync(codigo))
        dispatch(listAsyn())
    } 
}

export const deleteSync = (codigo)=>{
    return{
        type: typesPlantas.delete,
        payload: codigo
    }
   
}

//---------------listar----------------//
export const listAsyn =()=>{
    return async (dispatch)=>{
        const  colleccionTraer = await getDocs(collection(baseDato , "plantasBD"))
        console.log(colleccionTraer)
        const plantas = []
        colleccionTraer.forEach((doc)=>{
            plantas.push({
                ...doc.data()
                

            })
        })
        console.log(plantas)
        dispatch(listSync(plantas))
        
    }
}

export const listSync = (planta)=>{
    return{
        type: typesPlantas.list ,
        payload: planta 
    }
   
}

//-------------agregar---------------//
export const addAsync =(planta)=>{
    return(dispatch)=>{
        addDoc(collection(baseDato, "plantasBD"), planta)
        .then(resp =>{
            dispatch(addSync(planta))
          //  dispatch(listAsyn())
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