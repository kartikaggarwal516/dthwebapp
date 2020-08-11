import React, { Component } from "react"
import Header from "./Header"
import { Button } from "react-bootstrap"
import "../Styles/update.css"

class Update extends Component {
    state = {
        mail: "",
        phone: 0,
        msg: "",
        merr: "",
        perr: ""
    }
    submitHandler = event => {
        event.preventDefault()
        let { mail, phone, msg, merr, perr } = this.state
        mail = ""
        phone = 0
        msg = ""
        merr = ""
        perr = ""
        mail = event.target[0].value
        phone = event.target[1].value
        let mflag = false, pflag = false
        if (mail.length > 0)
            mflag = true
        else
            merr = "Please enter correct Email address"
        if (phone.length == 10)
            pflag = true
        else
            perr = "Please enter 10 digit phone no"

        if (pflag && mflag)
            msg = "Email and phone updated successfully"
        this.setState({ mail, phone, msg, merr, perr })
    }
    render() {
        const { msg, merr, perr } = this.state
        return (
            <div>
                <Header />
                <div className="updatebox">
                    <div className="upbox">
                        <form className="uform" onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label><b>Email address</b></label>
                                <input type="email" className="form-control" placeholder="Enter email" name="mail" />
                            </div>
                            <div className="form-group">
                                <label><b>Phone number</b></label>
                                <input type="number" className="form-control" placeholder="Enter Phone no." name="phone" />
                            </div>
                            <Button variant="primary" type="submit" className="subbtn">Update</Button>
                        </form>
                        <div className="msg">
                            {msg.length > 0
                                ? <div className="smsg">{msg}</div>
                                : <div>
                                    <div className="errmsg">{merr}</div>
                                    <div className="errmsg">{perr}</div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Update