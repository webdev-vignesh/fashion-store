import { Component } from "react";
import {Link} from "react-router-dom";
 
class Navbar extends Component {
    render() {
        return(
            <>
                <nav className='navbar navbar-default navbar-expand-sm bg-light'>
                    <div className='container'>
                        <div>
                            <Link className='navbar-brand fw-bold' to='/'>Fab Dressing</Link>
                        </div>
                        <ul className='nav navbar-nav '>
                            <li className='nav-item'><Link to='/' className=' nav-link'>Home</Link></li>
                            <li className='nav-item'><Link to='/shop' className='nav-link active'>Shop</Link></li>
                            <li className='nav-item'><button className='btn btn-primary rounded-pill' >Register/ Login</button></li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;