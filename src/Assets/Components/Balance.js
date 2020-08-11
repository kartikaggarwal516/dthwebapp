import React from "react"
import Header from "./Header"
import { connect } from "react-redux"
import "../Styles/balance.css"

const Balance = props => {
    return (
        <div>
            <Header />
            <div className="balance-box">
                <div className="balance">
                    <h3>Account Balance</h3>
                    <h3> {props.balance} </h3>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = store => {
    return {
        balance: store.balance
    }
}
export default connect(mapStateToProps, null)(Balance)