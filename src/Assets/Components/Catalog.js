import React from "react"
import Header from "./Header";
import "../Styles/catalog.css"

const Catalog = props => {
    return (
        <div>
            <Header />
            <div className="catalog-box">
                <div className="chead">
                    <h3>Available Catalog</h3>
                </div>
                <div className="heads">
                    <h4>Available Packs</h4>
                </div>
                <div className="packs-box">
                    <div className="pbox">
                        <h5>Gold - ₹100</h5>
                        <p>Subscription pack</p>
                        <hr />                        
                        <div>Zee</div>
                        <div>Sony</div>
                        <div>Star Plus</div>
                        <div>Discovery</div>
                        <div>NatGeo</div>
                    </div>
                    <div className="pbox">
                        <h5>Silver - ₹50</h5>
                        <p>Subscription pack</p>
                        <hr />
                        <div>Zee</div>
                        <div>Sony</div>
                        <div>Star Plus</div>
                    </div>
                </div>
                <div className="heads">
                    <h4>Available Channels</h4>
                </div>
                <div className="channelbox">
                    <div className="channel">
                        ₹ 10 | Zee
                    </div>
                    <div className="channel">
                        ₹ 15 | Sony
                    </div>
                    <div className="channel">
                        ₹ 20 | Star Plus
                    </div>
                    <div className="channel">
                        ₹ 10 | Discovery
                    </div>
                    <div className="channel">
                        ₹ 20 | NatGeo
                    </div>
                </div>
                <div className="heads">
                    <h4>Available Services</h4>
                </div>
                <div className="channelbox">
                    <div className="channel">
                        ₹ 200 | Learn English
                    </div>
                    <div className="channel">
                        ₹ 100 | Learn Cooking
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog