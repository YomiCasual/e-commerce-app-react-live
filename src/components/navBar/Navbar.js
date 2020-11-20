import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {PhoneContext} from '../context/context'
// import Logo from '../../data/logo.svg'

const Navbar = () => {
	let state = useContext(PhoneContext)
	let cartLength = state.cart.length
    return (
        <nav className="navbar navbar-dark bg-dark navbar-fixed-top">
        	<Link to="/" className="navbar navbar-brand">
        	<span className="ml-2">E-commerce</span>
        	</Link>
        	<Link to="/cart" className="cart">Cart
        	<span className="badge badge-small badge-warning p-1 ml-2">{cartLength}</span></Link>
        </nav>
    );
};


export default Navbar;
