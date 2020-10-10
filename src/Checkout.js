import React from 'react'
import { useStateValue} from "./StateProvider"
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"

function Checkout({ item, title, image, price, rating}) {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
           <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/PAE/Benito/Banners/041320_Acquisition_Banner_GCLP_map_learn._CB1198675309_.jpg"/>
           

          {basket?.length === 0 ? (
              <div>
                  <h2>Your shopping basket is empty</h2>
                  <p> Please select an item and press "Add to Basket"</p>
                  </div>
          ) : (
             <div>
                 <h2 className="checkout__title">Your Shopping Basket: </h2>
                 {/* list out all the checkout products */}
                 {basket.map(item => (
                     <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}     
                     
                     />
                 ))}
             </div> 
          ) } 
        </div>
    )
}

export default Checkout
