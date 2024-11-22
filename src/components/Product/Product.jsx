import React,{useState, useEffect} from 'react'
import ProductCard from './ProductCard';
import axios from "axios";
import styles from './Product.module.css'
import Loader from '../Loader/Loader';


function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        isLoading(false)
      })
      .catch((err) => {
        console.log(err);
        isLoading(false)
      });
  }, []);
  return (
    <>
    {
      isLoading? (<Loader/>) : (<section className={styles.products_container}>
        {
          products.map((singleProduct)=>{
            return <ProductCard product={singleProduct} key={singleProduct.id}/>
          })
        }
      </section>)
    }
    
    </>
  )
}

export default Product