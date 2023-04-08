import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {

    let message;
    if(cart.length === 0){
        message = <p>Please add some products.</p>
    }else{
        message = <div>
            <h3>Boroloks</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }

    return (
        <div>
            <h2 className={cart.length ===1 ? 'blue' : 'red'}>Order Summary : {cart.length}</h2>
            <p className={`bold bordered ${cart.length ===3 ? 'yellow' : 'purple'}`}>Something</p>
            {cart.length > 2 ? <span className='purple'>Aro kino</span> : <span>Fokira</span> }
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name}
                        <button 
                        onClick={()=>handleRemoveFromCart(tshirt._id)}
                    >X</button></p>)
            }
            {
                cart.length === 2 && <p>Double bonanza!!!</p>
            }
            {
                cart.length ===3 || <h3>Tinta to Hoilo na!!</h3>
            }
        </div>
    );
};

export default Cart;


/**
 * CONDITIONAL RENDERING
 * 1. Use if else to set a variable that will contain an element, components.
 * 2. ternary operator: condition ? true value : false value.
 * 3. logical and &&: If the condition is true then the next thing will be executed.
 * 4. logical or || : If the condition is false then the next thing will be executed.
 * 
 **/

/**
 * CONDITIONAL CSS CLASS 
 * 1. use ternary
 * 2. ternary inside template string
 * 
 * 
 * */ 