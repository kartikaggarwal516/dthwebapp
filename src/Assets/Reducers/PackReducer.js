import {PACK} from "../Actions/Actions"

let defaultstate = ""
export default function PackReducer(state=defaultstate,action){
    switch(action.type){
        case PACK: {
            state = action.payload
            return state
        }
        default: return state
    }
}