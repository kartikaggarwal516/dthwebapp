import React, { Component } from "react"
import Header from "./Header"
import { Button } from "react-bootstrap"
import "../Styles/subscribe.css"
import { subscribe,currentPack } from "../Actions/Actions"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

class Subscribe extends Component {
    state = {
        errg : "",
        errs : "",
        msg : "",
        amount: 0
    }
    submitHandler = event => {
        event.preventDefault()
        let pack = event.target[0].name        
        let months = Number(event.target[0].value)
        let f = true, {errg,errs,msg,amount} = this.state
        errg = ""
        errs = ""
        msg = ""        
        if (pack == "Gold") {
            amount = 100 * months
            if(amount == 0 || amount < 0)
                errg = "Please enter valid number"
            if (amount > this.props.balance)
                {
                    f = false
                    errg = "Insufficient balance"
                }
        }
        else if(pack == "Silver"){
            amount = 50 * months
            if(amount == 0 || amount < 0)
                errs = "Please enter valid number"
            if (amount > this.props.balance)
                {
                    f = false
                    errs = "Insufficient balance"
                }
        }
        if (f && amount>0)
            {                
                this.props.subscribe(amount)
                this.props.currentPack(pack)                
                msg = "Pack Subscribed Successsfully"                
            }
                   
        this.setState({errg,errs,msg,amount})
    }
        render(){
            const {errg,errs,msg,amount} = this.state            
            return (
                <div>
                    <div>
                        <Header />
                        <div className="subbox">
                            <div className="pbox">
                                <h5>Gold - ₹100</h5>
                                <p>Subscription pack</p>
                                <hr />
                                <div>Zee</div>
                                <div>Sony</div>
                                <div>Star Plus</div>
                                <div>Discovery</div>
                                <div>NatGeo</div>
                                <hr />
                                <form className="fbox" onSubmit={this.submitHandler}>
                                    <input type="number" name="Gold" placeholder="Number of Months" className="subin" />
                                    <Button variant="warning" type="submit" className="subbtn">Subscribe</Button>
                                    {errg.length>0 && <div className="errmsg">{errg}</div>}
                                </form>
                            </div>
                            <div className="pbox">
                                <h5>Silver - ₹50</h5>
                                <p>Subscription pack</p>
                                <hr />
                                <div>Zee</div>
                                <div>Sony</div>
                                <div>Star Plus</div>
                                <hr />
                                <form className="fbox" onSubmit={this.submitHandler}>
                                    <input type="number" name="Silver" placeholder="Number of Months" className="subin" />
                                    <Button variant="warning" type="submit" className="subbtn">Subscribe</Button>
                                    {errs.length>0 && <div className="errmsg">{errs}</div>}
                                </form>
                            </div>
                            <div className="balbox">
                                <div className="balance">
                                    <h4>Account Balance</h4>
                                    <h4> {this.props.balance} </h4>
                                </div>
                                <div className="balance">
                                    <h4>Subscription Amount</h4>
                                    <h4> {amount} </h4>
                                </div>
                                {msg.length > 0 && <div className="smsg">{msg}</div>}
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
            { subscribe,currentPack }, dispatch
        )
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Subscribe)