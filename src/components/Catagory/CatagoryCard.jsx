import React from 'react'
import styles from './Catagory.module.css'

function CategoryCard({data}) {

  return (
    <div className={styles.category}>

        <a href=''>
            <span>
                <h2>{data?.title}</h2>
            </span>
            <img src={data?.imgLink} alt={data.name + ' products'} />
            <p>shop now</p>
        </a>
    </div>
  )
}

export default CategoryCard