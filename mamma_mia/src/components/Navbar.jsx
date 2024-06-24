import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar">
                    <div className="container-links">
                        <Link to="/" className="logo-nombre">
                            <h4 className="mb-0">&#127829; Pizzería Mamma Mia!</h4>
                        </Link>

                    </div>
            </div>
        </>
    )
}
export default Navbar;