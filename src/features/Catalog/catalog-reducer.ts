import {AppThunk} from "../../store/store"
import {productsApi, ProductsRootType} from '../../api/api';
import {errorHandlerUtil} from '../../common/utils/errors-utils';
import {setIsInitialized} from '../../app/app-reducer';

const initialState = {
    catalogData: [] as ProductsRootType[],
}

export const catalogReducer = (state = initialState, action: CatalogActionType): InitialAppStateType => {
    switch (action.type) {
        case 'CATALOG/SET-CATALOG-DATA':
            return {...state, catalogData: action.data}
        default:
            return state
    }
}

//actions
export const setCatalogData = (data: ProductsRootType[]) => ({type: 'CATALOG/SET-CATALOG-DATA', data} as const)

//thunks
export const setCatalog = (): AppThunk => async (dispatch) => {
    try {
        const res = await productsApi.getCurrentProducts()
        dispatch(setCatalogData(res.data))
    } catch (e) {
        errorHandlerUtil(e, dispatch)
    } finally {
        dispatch(setIsInitialized(true))
    }
}

// type
export type InitialAppStateType = typeof initialState
export type CatalogActionType = ReturnType<typeof setCatalogData>