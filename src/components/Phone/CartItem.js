import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'

const CartItem = ({item, increaseItem, decreaseItem, deleteItem}) => {
    const {title, id, count, total, price,img} = item

    return (
        <Fragment>
        <div className="cart-item text-center">
        <div className="cart-image">
        <Link to={`/room/${id}`}>
            <img src={img} alt={title} />
        </Link>
        </div>

        <div>
        <h5>{title}</h5>
        </div>

        <div>
        <h5>${price}</h5>
        </div>

        <div className="cartitem-btn" >
        <button 
        className="btn-decrement"
        onClick={() => decreaseItem(id)}
        > - </button>
        <h5>{count}</h5>
        <button 
        className="btn-increment"
        onClick={() => increaseItem(id)}
        > + </button>
        </div>

        <div>
        <button 
        className="btn btn-danger"
        onClick={() => deleteItem(id)}
        >Delete</button>
        </div>

       <div>
        <h5>${total}</h5>
        </div>
        </div>
        <div className="divider" >
        </div>
        </Fragment>
    );
};


export default CartItem;
