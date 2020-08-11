import {BALANCEDETAILS,ADDAMOUNT,PACKSUBSCRIPTION} from "../Actions/Actions"

const defaultstate = 100
export default function BalanceReducer(state=defaultstate,action)
{
    switch(action.type)
    {
        case BALANCEDETAILS: {
            return state
        }
        case ADDAMOUNT: {
            state += action.payload
            return state
        }
        case PACKSUBSCRIPTION: {
            state -= action.payload
            return state
        }
        default: return state
    }
}