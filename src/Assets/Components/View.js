import React from "react"
import Header from "./Header"
import { connect } from "react-redux"
import "../Styles/view.css"

const View = props => {
    return (
        <div>
            <Header />
            <div className="viewbox">
                <div className="clist">
                    <h5>Pack</h5>
                    <div className="chprice">
                        {props.pack}
                    </div>
                </div>
                <div className="clist">
                    <h5>Added Channels</h5>
                    {props.channels.map((ch,i) => {
                        return (
                            <div key={i} className="chprice">
                                {ch}
                            </div>
                        )
                    })}
                </div>
                <div className="clist">
                    <h5>Services</h5>
                    {props.services.map((s,i) => {
                        return (
                            <div key={i} className="chprice">
                                {s}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = store => {
    return {
        pack: store.pack,
        channels: store.channels,
        services: store.services
    }
}
export default connect(mapStateToProps, null)(View)