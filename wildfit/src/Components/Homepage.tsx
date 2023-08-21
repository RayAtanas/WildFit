import React from "react";
import ReactDOM from "react-dom";
import "../CSS/Homepage.css"
import { Row } from "react-bootstrap";
function Homepage() {

    return (
        <div>

            <div className=" header container-fluid">
                <div className="row justify-content-end">
                    <div className="title col-7">
                        <h1>Wildfit</h1>
                    </div>
                    <div className="col-5">
                        <nav>
                            <button className="header-btn col col-lg-2" >New Arrival</button>
                            <button className="header-btn col col-lg-2">Wishlist</button>
                            <button className="header-btn col col-lg-2">Cart</button>
                            <input className="searchbar col col-lg-2" placeholder="Search" />
                        </nav>
                    </div>

                </div>

            </div>

            <div className="body container-fluid">

                <div className="sidebar col-2 row justify-content-start">

                    <div className="side_button sidebar row justify-content-start row-col-1">

                        <div className="categories">
                            <h3>Categories</h3>
                        </div>

                        <button className="side_button">New</button>
                        <button className="side_button">Best Sellers</button>
                        <button className="side_button">Hoodies</button>
                    </div>

                </div>
            </div>


        </div>
    )

} export default Homepage;