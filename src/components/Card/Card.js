import React from 'react';
import { Link } from 'react-router-dom'
const Card = ({item, addToCart}) => {

	const { img, price, id, inCart, title } = item;

	const cartButton = () => {
		if (!inCart) {
		return (
		<button 
		className="btn btn-hover" 
		onClick={() => addToCart(id)}>Add to Cart</button>
				)
		}

		else {
			return (
		<button 
		className="btn btn-disabled" 
		disabled
		onClick={() => addToCart(id)}>in cart</button>

				)
		}
	}

	return(
		<div className="single-card">
		<div className="card-image">
		<img src={img} alt="phone"/>
		<div className="overlay"></div>

		<Link to={`/room/${id}`} className="btn-primary"
		>Check</Link>
		{cartButton()}
		</div>
		<div className="card-details">
		<h5>{title}</h5>
		<div className="card-details-icons">
		<h5 className="text-right mr-3">$ {price}</h5>
		</div>
		</div>
		</div>
		)

}

export default Card
