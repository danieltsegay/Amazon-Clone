import React from 'react'
import Rating from '@mui/material/Rating/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import styles from './Product.module.css'


function ProductCard({product}) {
    const { image, title, rating, price, } = product;
  return (
    <div className={`${styles.card__container}`}>
        <a href="">
            <img src={image} alt="" className={styles.img_container}/>
        </a>
        <div>
            <h3>{title}</h3>
            <div className={styles.rating}>
                    <Rating value={rating.rate} precision={0.1} />
                    {/* count */}
                <small>{rating.count}</small>
                <div className={styles.price_border}>
                    {/* prize */}
                    <CurrencyFormat amount={price}/>
                </div>
                <button className={styles.button}>
                    add to cart
                </button>
            </div>
        </div>
    </div>
    
  )
}

export default ProductCard