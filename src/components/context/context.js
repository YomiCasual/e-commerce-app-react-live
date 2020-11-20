import React, {Component,  createContext } from 'react'
import {storeProducts} from '../../data/data'

const PhoneContext = createContext()


class Context extends Component {
	state = {
		data: [],
		loading: true,
		cart: [],
		modalItem: storeProducts[1],
		modalOpen: false,
		purchase: false,
		error: false,
	}


	getData = () => {
		let phones = storeProducts
		return phones
	}

	onPaymentSucces = () => {
		this.setState((currentState) => ({
			  purchase: true,
				modalOpen: true
		}))
	}

	onPaymentError = () => {
		this.setState((currentState) => ({
			  error: true,
				modalOpen: true
		}))
	}


	closePayment = () => {
		this.setState((currentState) => ({
			purchase: false,
			modalOpen: false,
			error: false,
	}))
	}

	addToCart = (id) => {
		let phones = [...this.state.data]
		phones = phones.map(phone => {
			if(phone.id === id) {
				phone.inCart = true
			}
			return phone
		})

		let phone = {...phones.find(phone => phone.id === parseInt(id, 10))}
		phone.count = 1
		phone.total = phone.count * phone.price;
		
		this.setState({
			data: phones,
			cart: [...this.state.cart , phone],
			modalItem: phone,
			modalOpen: true
		})
	}

	closeModal = () => {
		this.setState({
			modalOpen: false
		}
		)
	}

	increaseItem = (id) => {
		let cart = [...this.state.cart]
		let phone = cart.find(item => item.id === parseInt(id, 10))
		phone.count += 1
		phone.total = phone.count * phone.price;

		this.setState({
			cart
		})
	} 

	decreaseItem = (id) => {
		let phones = [...this.state.data]
		let cart = [...this.state.cart]
		let phone = cart.find(item => item.id === parseInt(id, 10))
		phone.count -= 1
		phone.total = phone.count * phone.price;

		if (phone.count < 1) {
			cart = cart.filter(item => item.id !== parseInt(id,10))
			let updatedPhone = phones.find(item => item.id === parseInt(id,10))
			updatedPhone.inCart = false
		}

		this.setState({
			cart,
			data: phones
		})
	} 


	deleteItem = (id) => {
		let phones = [...this.state.data]
		let cart = [...this.state.cart]
		cart = cart.filter(item => item.id !== parseInt(id,10))

		let updatedPhone = phones.find(item => item.id === parseInt(id,10))
		updatedPhone.inCart = false

		this.setState({
			cart,
			data: phones
		})
	}

	clearCart = () => {
		let phones = [...this.state.data]
		phones = phones.map(item => ( {...item, inCart:false}) )
		this.setState({
			data: phones,
			cart: []
		})
	}

	componentDidMount() {
		let data = this.getData();

		setTimeout(() => {
			this.setState({
			data,
			loading: false
		},)
		}, 4000)
		
	}


	findPhone = (id) => {
		let phone = {...this.state.data.find(phone => phone.id === parseInt(id,10))}
		return phone
	}

	render() {
		return(
			<PhoneContext.Provider 
			value={{
				...this.state, 
				findPhone: this.findPhone, 
				addToCart: this.addToCart,
				increaseItem: this.increaseItem,
				decreaseItem: this.decreaseItem,
				deleteItem: this.deleteItem,
				clearCart: this.clearCart,
				closeModal: this.closeModal,
				onPaymentSuccess: this.onPaymentSucces,
				closePayment: this.closePayment,
				onPaymentError: this.onPaymentError,
			}}>
			{this.props.children}
			</PhoneContext.Provider>
			)
	}
}

export { Context, PhoneContext };