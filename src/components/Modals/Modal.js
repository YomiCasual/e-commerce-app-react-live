import React, {Fragment, useContext } from 'react'
import {PhoneContext} from '../context/context'
import { Link } from 'react-router-dom'

const Modal = () => {

  let context = useContext(PhoneContext)

  const { modalItem, modalOpen, closeModal, purchase, closePayment, error } = context
  const {title, img,  } = modalItem

  if (modalOpen && !purchase && !error) {
    return(
    <Fragment>
    <div className="modal-overlay text-center"
    onClick={closeModal}
    >
    <div className="cart-modal">
    <h5 className="text-success">Item Added To Cart</h5>
    <h4>{title}</h4>
    <Link to={`/room/${modalItem.id}`}>
            <img src={img} alt={title} width={200} />
    </Link>
    <Link to="/" className="btn btn-outline-success my-2 d-block"
    onClick={closeModal}
    >Continue Shopping</Link>
    <Link to="/cart" className="btn btn-outline-info d-block mb-2"
    onClick={closeModal}
    >Go to Cart</Link>
    </div>
    </div>
    </Fragment>
  )
  }

  if (purchase) {
    return (
    <Fragment>
    <div className="modal-overlay text-center"
    onClick={closePayment}
    >
    <div className="cart-modal">
    <h5 className="text-success">Payment Successful</h5>
    <img src='https://cdn.jsdelivr.net/gh/YomiCasual/e-commerce-app-react@master/src/data/gif/31615154-9c8c4886-b280-11e7-828d-2f64e4250c53.gif' alt={title} width={200} />
    <p className="text-success">Thanks for your purchase, Check your Email for further Steps</p>
    </div>
    </div>
    </Fragment>
    )
  }

  if (error) {
    return (
    <Fragment>
    <div className="modal-overlay text-center"
    onClick={closePayment}
    >
    <div className="cart-modal">
    <h5 className="text-danger">Payment Was Cancelled</h5>
    <img src='https://cdn.jsdelivr.net/gh/YomiCasual/e-commerce-app-react@master/src/data/gif/Error.gif' alt={title} width={200} />
    <p className="text-danger">Ooops!</p>
    </div>
    </div>
    </Fragment>
    )
  }
  else {
    return null
  }
 
}

export default Modal