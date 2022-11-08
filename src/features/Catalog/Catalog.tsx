import React, {useEffect} from 'react';
import {useAppDispatch} from '../../common/hooks/useAppDispatch';
import {useAppSelector} from '../../common/hooks/useAppSelector';
import {setCatalog} from './catalog-reducer';
import {Preloader} from '../../common/component/Preloader/Preloader';


export const Catalog = () => {

    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    const catalogData = useAppSelector(state => state.catalog.catalogData)

    console.log(catalogData)
    useEffect(() => {
        dispatch(setCatalog())
    }, [])



    if (!isInitialized) {
        return <Preloader/>
    }

    return <div>
        {catalogData?.map(el => <div>{el.title}</div>)}
    </div>
}