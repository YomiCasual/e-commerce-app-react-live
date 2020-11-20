import React, {useEffect, useState, useContext } from 'react';
import { PhoneContext } from '../context/context';
import PhoneDetails from './PhoneDetails'
import Loading from './Loading'

const SinglePhone = (props) => {

	const state = useContext(PhoneContext)

	const[slug, setSlug] = useState('')

	useEffect(() => {
		let slug = props.match.params.slug
		setSlug(slug)
	}, [])

	let phone = state.findPhone(slug)

	if (state.loading) {
		return (
			<Loading />
			)
	}
    return (
        <div className="single-room">
        <PhoneDetails phone={phone} addToCart={state.addToCart} />
        </div>
    );
};

export default SinglePhone;
