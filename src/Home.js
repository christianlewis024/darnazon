import React from 'react'
import "./Home.css"
import Product from "./Product"
function Home() {
    return (
        <div className="home">           
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020_PrimeDay/GW/RB-2817_PD2020_Channels_GW_Desktop_Tablet_Hero_Biz_EN_V2b_1x._CB403910725_.jpg" alt="amazon prime banner add" />
            <div className="home__row">
            <Product
                id="1231"
                title={"Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"}
                price={169.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
            />
            <Product
                id="1232"
                title={"Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"}
                price={39.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/61udZgwD8qL._AC_SL1000_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
                id="1233"
                title={"Fire TV Stick 4K streaming device with Alexa built in, latest release"}
                price={49.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61mAA2BB-FL._AC_SL1000_.jpg"
            />
            <Product
                id="1234"
                title={"The Happy in a Hurry Cookbook: 100-Plus Fast and Easy New Recipes"}
                price={17.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51KRcxm2WXL._SX400_BO1,204,203,200_.jpg"
            />
            <Product
                id="1235"
                title={"Roku Express HD Streaming Media Player"}
                price={29.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81T70LF0wWL._AC_SL1500_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
                id="1236"
                title={"All-New Insignia NS-43DF710NA21 43-inch Smart 4K UHD - Fire TV Edition, Released 2020"}
                price={199.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61%2BOhM4LEUL._AC_SL1000_.jpg"
            />

            </div>
            {/* product id, title, price, rating, image */}
            {/* Product */}
        </div>
    )
}

export default Home
