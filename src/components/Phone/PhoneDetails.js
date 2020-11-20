import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'

const PhoneDetails = ({phone, addToCart}) => {


	const { img, title, info, price, company, inCart, id} = phone
	
	const formatButton = () => {
		if (inCart) {
			return(
				<button className="btn btn-warning" disabled>in cart</button>
				)
		}
		else {
			return(
				<button 
				className="btn btn-success"
				onClick={() => addToCart(id)}
				>add to cart</button>
				)
		}
	}

	return (
		<Fragment>
		<h1>{title} - ${price}</h1>
		<div className="single-room-details">
		<div className="single-room-image">
		<img src={img} alt="phone" />
		</div>
		<div className="single-room-info">
		<h5>DESCRIPTION</h5>
		<p>{info}</p>
		<p className="lead">PRODUCED BY - {company}</p>		
		{formatButton()}
		<Link to="/" className="btn btn-secondary ml-2">go back</Link>
		</div>
		</div>
		
		</Fragment>
		)

}


export default PhoneDetails