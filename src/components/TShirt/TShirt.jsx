import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt}) => {
    const{_id, picture, name, price, gender} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p> ${price}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default TShirt;