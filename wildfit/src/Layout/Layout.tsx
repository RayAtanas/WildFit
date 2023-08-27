


function Layout() {
    return (
        <>
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
            

            <div className="sidebar col-2 row justify-content-start d-inline me-5">

                    <div className="side_button row justify-content-start p-2- m-2">

                        <div className="categories">
                            <h3>Categories</h3>
                        </div>

                        <a className="side_button">New</a>
                        <a className="side_button">Best Sellers</a>
                        <a className="side_button">Hoodies</a>

                    </div>

                </div>


        </>
    )
} export default Layout