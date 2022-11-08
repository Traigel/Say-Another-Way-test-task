import React, {useEffect, useState} from 'react';
import styles from './Catalog.module.scss'
import {useAppDispatch} from '../../common/hooks/useAppDispatch';
import {useAppSelector} from '../../common/hooks/useAppSelector';
import {setCatalog} from './catalog-reducer';
import {Preloader} from '../../common/component/Preloader/Preloader';
import {useSearch} from '../../common/hooks/useSearch';
import {SearchInputText} from '../../common/component/SearchInputText/SearchInputText';
import {ProductCard} from './ProductCard/ProductCard';

export const Catalog = () => {

    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    const catalogData = useAppSelector(state => state.catalog.catalogData)

    const [value, setValue] = useState<string>('')

    const search = useSearch(catalogData, value)

    useEffect(() => {
        dispatch(setCatalog())
    }, [])

    if (!isInitialized) {
        return <Preloader/>
    }

    return <div className={styles.catalogComponent}>

        <div className={styles.search}>
            <h1 className={styles.item}>{search.length} PRODUCTS</h1>
            <SearchInputText
                value={value}
                onChange={setValue}
            />
        </div>

        <div className={styles.catalog}>
            {search.length > 0 ?
                search.map(el => <ProductCard key={el.id} product={el}/>)
                :
                <h2 className={styles.message}>NOTHING FOUND FOR YOUR REQUEST</h2>}
        </div>

    </div>
}