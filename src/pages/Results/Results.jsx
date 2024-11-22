import React, { useEffect, useState } from 'react'
import styles from './Results.module.css'
import LayOut from '../../components/Layout/LayOut'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../components/Product/ProductCard';

function Results() {
  const [results, setResults] = useState([]);
  const {categoryName} = useParams()
  useEffect(()=>{
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
      setResults(res.data)
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[productUrl]) 

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
          <div className={styles.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        
      </section>
    </LayOut>
    
  )
}

export default Results