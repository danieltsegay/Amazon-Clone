import React from 'react'
import Rating from '@mui/material/Rating/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import styles from './Product.module.css'
import { Link } from 'react-router-dom';


function ProductCard({product, flex, renderDesc}) {
    const { id, image, title, rating, price, description} = product;
  return (
    <div className={`${styles.card__container} ${
        flex?styles.product__flexed : '' }`}>
        <Link to={`/products/${id}`}>
            <img src={image} alt="" className={styles.img_container}/>
        </Link>
        <div>
            <h3>{title}</h3>
            {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
            <div className={styles.rating}>
                    <Rating value={rating?.rate} precision={0.1} />
                    {/* count */}
                <small>{rating?.count}</small>
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