import React,{useState, useEffect} from 'react'
import ProductCard from './ProductCard';
import axios from "axios";
import styles from './Product.module.css'


function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        
      })
      .catch((err) => {
        console.log(err);
        
      });
  }, []);
  return (
    <section className={styles.products_container}>
      {
        products.map((singleProduct)=>{
          return <ProductCard product={singleProduct} key={singleProduct.id}/>
        })
      }
    </section>
  )
}

export default Product