import React from 'react'
import "./Product.css"
function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>

            </p>
            <p className="product__rating">
                {/* pass in the number, then fill it and map through every one */}
                {/* Array is a built in JS function to make an array with the size of the input */}
               {
                   Array(rating).fill().map((_) => (
                       <p>🌟</p>
                   ))
               }
            </p>
            <img src={image}/>
           
        </div>
    )
}

export default Product
