import React from 'react';
import styles from '@/styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
      </div>
      <h4>{product.name}</h4>
      <div className={styles.productInfo}>
        <p>{product.description}</p>
        <a href={product.link} className={styles.productLink}>Learn More</a>
      </div>
    </div>
  );
};

export default ProductCard;