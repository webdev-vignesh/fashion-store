import { Component } from "react";

class Navbar extends Component {
    render() {
        return(
            <>
                <nav className='navbar navbar-default navbar-expand-sm bg-light'>
                    <div className='container'>
                        <div>
                            <a className='navbar-brand' href='/'>Fashiop</a>
                        </div>
                        <ul className='nav navbar-nav '>
                            <li className='nav-item'><a href='home' className=' nav-link'>Home</a></li>
                            <li className='nav-item'><a href='shop' className='nav-link active'>Shop</a></li>
                            <li className='nav-item'><button className='btn btn-primary rounded-pill' >Register/ Login</button></li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;