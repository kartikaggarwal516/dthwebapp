import React, { Component } from "react"
import Header from "./Header"
import { Button } from "react-bootstrap"
import { subscribe, addServices } from "../Actions/Actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import "../Styles/services.css"

class Services extends Component {
    state = {
        err: "",
        msg: ""
    }
    submitHandler = event => {
        event.preventDefault()
        let services = event.target[0].value.split(",")
        let amount = 0, { err, msg } = this.state
        err = ""
        msg = ""
        services.map(s => {
            let str = s.trim()
            if (str == "Learn English")
                amount += 200
            else if (str == "Learn Cooking")
                amount += 100
        })
        if(amount == 0)
            err = "Please enter the Services name correctly as mentioned above"
        else if (amount > this.props.balance)
            err = "Insufficient balance"
        else {
            this.props.subscribe(amount)
            msg = "Services added Successfully"
            services.map(s => {
                let str = s.trim()
                this.props.addServices(str)
            })
        }
        this.setState({ err,msg })
    }
    render() {
        const { err, msg } = this.state
        return (
            <div>
                <Header />
                <div className="channelbox">
                    <div className="clist">
                        <h5>Add Services</h5>
                        <div className="chprice">
                            ₹ 200 | Learn English
                        </div>
                        <div className="chprice">
                            ₹ 100 | Learn Cooking
                        </div>
                    </div>
                    <div className="balance">
                        <h3>Account Balance</h3>
                        <h3> {this.props.balance} </h3>
                    </div>
                </div>
                <div className="addc">
                    <form className="cform" onSubmit={this.submitHandler}>
                        <input type="text" placeholder="Enter Services name to add(seperated by comma)" className="chanin" />
                        <Button variant="warning" type="submit" className="subbtn">Add</Button>
                    </form>
                </div>
                <div className="msg">
                    {msg.length > 0
                    ? <div className="smsg">{msg}</div>
                    : <div className="errmsg">{err}</div>}
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
        { subscribe, addServices }, dispatch
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Services)