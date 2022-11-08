import React from 'react';
import styles from './ProductCard.module.css'
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

    const stylesButton = {
        color: '#fff',
        backgroundColor: '#333',
        borderRadius: 0,
        width: 50,
        height: 45,
        position: 'absolute',
        top: 240,
        right: -25,
        '&: hover': {
            backgroundColor: '#333',
        }
    }

    const stylesRating = {
        color: '#333'
    }

    return <div className={styles.productBox}>
        <IconButton sx={stylesButton}>
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
                sx={stylesRating}
                emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
            />
            <span className={styles.category}>{finaleCategory}</span>
        </div>
    </div>
}