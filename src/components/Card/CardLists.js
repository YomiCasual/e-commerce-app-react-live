import React,{Fragment, useContext } from 'react';
import Card from './Card'
import { PhoneContext } from '../context/context';
import Loading from '../Phone/Loading'

const CardLists = () => {

	const value = useContext(PhoneContext)
	

	if (value.loading) {
		return <Loading />
	}

	else {
		return (
		<Fragment>
		<h3 className="our-products text-center">our <span>products</span></h3>
    	<div className="container">
    	   {value.data.map((item, index)=> (
        	<Card key={index} item={item} addToCart={value.addToCart} />
        	))}
 	
        </div>
        </Fragment>
    )

	}

};


export default CardLists;
