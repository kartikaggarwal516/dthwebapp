import React, { Component } from "react"
import Header from "./Header"
import "../Styles/channel.css"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { subscribe, addChannel } from "../Actions/Actions"
import { Button } from "react-bootstrap"

class Channel extends Component {
    state = {
        err: "",
        msg: ""
    }
    submitHandler = event => {
        event.preventDefault()
        let channels = event.target[0].value.split(",")
        console.log("channels", channels)
        let amount = 0, { err, msg } = this.state
        err = ""
        msg = ""
        channels.map(ch => {
            let str = ch.trim()
            if (str == "Zee")
                amount += 10
            else if (str == "Sony")
                amount += 15
            else if (str == "Star Plus")
                amount += 20
            else if (str == "Discovery")
                amount += 10
            else if (str == "NatGeo")
                amount += 20
        })
        console.log("amount", amount)
        if (amount == 0)
            err = "Please enter the channels name correctly as mentioned above"
        else if (amount > this.props.balance)
            err = "Insufficient balance"
        else {
            this.props.subscribe(amount)
            msg = "Channels added Successfully"
            channels.map(ch => {
                let str = ch.trim()
                this.props.addChannel(str)
            })
        }
        this.setState({ err, msg })
    }
    render() {
        const { err, msg } = this.state
        return (
            <div>
                <Header />
                <div className="channelbox">
                    <div className="clist">
                        <h5>Add Channels</h5>
                        <div className="chprice">
                            ₹ 10 | Zee
                        </div>
                        <div className="chprice">
                            ₹ 15 | Sony
                        </div>
                        <div className="chprice">
                            ₹ 20 | Star Plus
                        </div>
                        <div className="chprice">
                            ₹ 10 | Discovery
                        </div>
                        <div className="chprice">
                            ₹ 20 | NatGeo
                        </div>
                    </div>
                    <div className="balance">
                        <h3>Account Balance</h3>
                        <h3> {this.props.balance} </h3>
                    </div>
                </div>
                <div className="addc">
                    <form className="cform" onSubmit={this.submitHandler}>
                        <input type="text" placeholder="Enter channels name to add(seperated by comma)" className="chanin" />
                        <Button variant="warning" type="submit" className="subbtn">Add</Button>                        
                    </form>
                    <div className="msg">
                        {msg.length > 0 && err.length == 0
                            ? <div className="smsg">{msg}</div>
                            : <div className="errmsg">{err}</div>}
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
        { subscribe, addChannel }, dispatch
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Channel)