export const BALANCEDETAILS = "BALANCEDETAILS"
export const ADDAMOUNT = "ADDAMOUNT"
export const PACKSUBSCRIPTION = "PACKSUBSCRIPTION"
export const PACK = "PACK"
export const ADDCHANNEL = "ADDCHANNEL"
export const ADDSERVICES = "ADDSERVICES"

export const getBalance = () => {
    return{
        type: BALANCEDETAILS
    }
}
export const recharge = amount => {
    return{
        type: ADDAMOUNT,
        payload: amount
    }
}
export const subscribe = amount => {
    return{
        type: PACKSUBSCRIPTION,
        payload: amount
    }
}
export const currentPack = pack => {
    return{
        type: PACK,
        payload: pack
    }
}
export const addChannel = channel => {
    return{
        type: ADDCHANNEL,
        payload: channel
    }
}
export const addServices = service => {
    return{
        type: ADDSERVICES,
        payload: service
    }
}