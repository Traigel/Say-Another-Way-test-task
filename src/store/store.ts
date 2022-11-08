import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {AppActionType, appReducer} from '../app/app-reducer';
import {CatalogActionType, catalogReducer} from '../features/Catalog/catalog-reducer';

const rootReducer = combineReducers({
    app: appReducer,
    catalog: catalogReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppRootActionsType = AppActionType | CatalogActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>