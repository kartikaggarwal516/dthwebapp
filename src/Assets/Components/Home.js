import React, { Component } from "react"
import image from "../Images/pic2.jpg"
import "../Styles/home.css"
import { Link } from "react-router-dom"

const Home = props => {
    return (
        <div>
            <img className="himg" src={image} alt="header image" />
            <div className="container">
                <div className="head">
                    <h2>Welcome to SatTV</h2>
                </div>
                <div className="container2">
                    <div className="content">
                        <Link to="/balance">
                            <div className="opt">
                                <h4>Current Balance</h4>
                                <p>View current balance in the account</p>
                            </div>
                        </Link>
                        <Link to="/recharge">
                            <div className="opt">
                                <h4>Recharge Account</h4>
                                <p>Recharge to add money in your account</p>
                            </div>
                        </Link>
                        <Link to="/catalog">
                            <div className="opt">
                                <h4>Subscription Catalog</h4>
                                <p>View available packs,channels and services</p>
                            </div>
                        </Link>
                        <Link to="/subscribe">
                            <div className="opt">
                                <h4>Subscribe pack</h4>
                                <p>Subscribe to base packs</p>
                            </div>
                        </Link>
                        <Link to="/channel">
                            <div className="opt">
                                <h4>Add Channels</h4>
                                <p>Add channels to an existing subscription</p>
                            </div>
                        </Link>
                        <Link to="/services">
                            <div className="opt">
                                <h4>Special Services</h4>
                                <p>Subscribe to special services</p>
                            </div>
                        </Link>
                        <Link to="/view">
                            <div className="opt">
                                <h4>View Current Subscription</h4>
                                <p>View currently subscribed packs, channels and services for your account</p>
                            </div>
                        </Link>
                        <Link to="/update">
                            <div className="opt">
                                <h4>Update notification details</h4>
                                <p>Update email and phone number for notifications</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home