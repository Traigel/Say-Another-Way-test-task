import React from 'react';
import styles from './ProductCard.module.scss'
import {ProductsRootType} from '../../../api/api';
import Rating from '@mui/material/Rating';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';

type ProductCardPropsType = {
    product: ProductsRootType
}

export const ProductCard = ({product}: ProductCardPropsType) => {

    const finaleTitle = product.title.toUpperCase()
    const finaleCategory = product.category.toUpperCase()

    return <div className={styles.productBox}>

        <IconButton className={styles.button}>
            <LocalMallIcon/>
        </IconButton>

        <img className={styles.img} src={product.image} alt={'Product img'}/>

        <div className={styles.itemBox}>
            <span className={styles.title}>{finaleTitle}</span>
            <span className={`${styles.title} ${styles.price}`}>${product.price}</span>
        </div>

        <div className={styles.itemBox}>
            <Rating
                value={product.rating.rate}
                size="small"
                readOnly
                className={styles.rating}
                emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
            />
            <span className={styles.category}>{finaleCategory}</span>
        </div>

    </div>
}