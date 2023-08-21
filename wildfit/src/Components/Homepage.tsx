import React from "react";
import ReactDOM from "react-dom";
import "../CSS/Homepage.css"
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
                            <button className="col col-lg-2" >New Arrival</button>
                            <button className="col col-lg-2">Wishlist</button>
                            <button className="col col-lg-2">Cart</button>
                            <input className="searchbar col col-lg-2" placeholder="Search"/>
                        </nav>
                    </div>

                </div>
                
            </div>

            <div className="body container-fluid">

            </div>


        </div>
    )

} export default Homepage;