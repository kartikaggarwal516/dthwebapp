import React from "react"
import balance from "./BalanceReducer"
import channels from "./ChannelReducer"
import services from "./ServiceReducer"
import pack from "./PackReducer"
import { combineReducers } from "redux"

export default combineReducers({    
    balance: balance,
    channels: channels,
    services: services,
    pack: pack
})