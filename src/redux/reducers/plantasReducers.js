import { typesPlantas } from "../types/types";


const initialState = {
    plantas: []
}

export const plantasReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesPlantas.add:
            return {
                plantas: [action.payload]
            }

        case typesPlantas.list:
            return {
                plantas: [...action.payload]
            }
            
        case typesPlantas.edit:
            return {
                ...state
            }

        case typesPlantas.delete:
            return {
                ...state
            }

        default:
            return state
    }

}