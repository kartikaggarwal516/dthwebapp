import {ADDCHANNEL} from "../Actions/Actions"

let defaultstate=[]
export default function ChannelReducer(state=defaultstate,action){
    switch(action.type){
        case ADDCHANNEL: {
            state.push(action.payload)
            return state
        }
        default: return state
    }
}