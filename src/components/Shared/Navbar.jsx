import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container border-bottom pb-2 d-flex align-items-center justify-content-between mb-4">
            <h4>Users Management</h4>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to='/' className="nav-link">Signin</Link>
                </li>
                <li className="nav-item">
                    <Link to='/signup' className="nav-link">Signup</Link>
                </li>
                <li className="nav-item">
                    <Link to='/users' className="nav-link">Users</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;