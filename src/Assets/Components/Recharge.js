import React, {Component} from "react"
import Header from "./Header"
import { Button } from "react-bootstrap"
import "../Styles/recharge.css"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { recharge } from "../Actions/Actions"

class Recharge extends Component{
    state = {
        msg: "",
        err: ""
    }
    submitHandler = event => {
        event.preventDefault()
        let amount = Number(event.target[0].value)        
        let {msg,err} = this.state        
        if (amount > 0) {
            this.props.recharge(amount)
            msg = "Reacharge completed successfully"
        }
        else
            err = "Please enter valid amount"
        this.setState({msg,err})
    }
    render(){
        const {msg,err} = this.state
        return(
            <div>
            <Header />
            <div className="recharge-box">
                <div className="rbox">
                    <div className="amount">
                        <div className="amount-box">
                            <form onSubmit={this.submitHandler}>
                                <input type="number" placeholder="Enter the amount to recharge" className="inclass" />
                                <Button variant="warning" type="submit">Recharge</Button>
                            </form>
                        </div>
                        <div className="msg">
                            {msg.length > 0 && err.length == 0
                                ? <div className="smsg">{msg}</div>
                                : <div className="errmsg">{err}</div>}
                        </div>
                    </div>
                    <div className="newbalance">
                        <div className="balance">
                            <h3>Account Balance</h3>
                            <h3> {this.props.balance} </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }   
}


const mapStateToProps = store => {
    return {
        balance: store.balance
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { recharge }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Recharge)