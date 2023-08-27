import "../CSS/Homepage.css"
import { Row } from "react-bootstrap";
import "../Props/Clothes"
import Clothes from "../Props/Clothes";
function Homepage() {

    return (
        <div>
            {/* Header */}
            

            {/* main */}
            <div>
                <div>
                    {/* sideBar */}
                </div>
                <div>
                    {/* Content */}
                </div>
            </div>

            <div className="body d-flex container-fluid">

                <div className="col-10 row p-3 m-auto content">
                    <div className="d-flex justify-content-around border border-5 ">
                        
                        <Clothes className="col-4 mx-2 p-3" name="Jacket" img="" alt="test1" price={50} type="winter" size="large" />
                        <Clothes className="col-4 mx-2 p-3" name="short" img="" alt="test2" price={30} type="summer" size="Small" />
                        <Clothes className="col-4 mx-2 p-3" name="joseph" img="" alt="" price={100} type="charmourta" size="xtiziblackhole" />

                    </div>

                </div>
            </div>
        </div>
    )

} export default Homepage;