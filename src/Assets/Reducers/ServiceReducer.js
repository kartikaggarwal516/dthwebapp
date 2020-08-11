import {ADDSERVICES} from "../Actions/Actions"

let defaultstate=[]
export default function ServiceReducer(state=defaultstate,action){
    switch(action.type){
        case ADDSERVICES: {
            state.push(action.payload)
            return state
        }
        default: return state
    }
}