import React from 'react'
import "./CheckoutProduct.css"

function CheckoutProduct({ id, title, image, price, rating}) {
    
    return (
        <div className="checkoutProduct">            
            <img className="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">
                
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
            </p>

            <div className="checkoutProduct__rating">
                {/* pass in the number, then fill it and map through every one */}
                {/* Array is a built in JS function to make an array with the size of the input */}
               {
                   Array(rating).fill().map((_, i) => (
                       <p>🌟</p>
                   ))
               }
            </div>
            <button>Remove from Basket</button>
            </div>

        
            
        </div>
    )
}

export default CheckoutProduct
