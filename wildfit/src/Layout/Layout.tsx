


function Layout(){
return(
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
    
    
    
    </>
)
}export default Layout