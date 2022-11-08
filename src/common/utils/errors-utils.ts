import {AxiosError} from "axios";
import {Dispatch} from "redux";
import {setAppError} from "../../app/app-reducer";
import {AppRootActionsType} from "../../store/store";

export const errorHandlerUtil = (e: any, dispatch: Dispatch<AppRootActionsType>) => {
    const err = e as Error | AxiosError
    if (err.message) {
        dispatch(setAppError(err.message))
    } else {
        dispatch(setAppError('Native error'))
    }
}