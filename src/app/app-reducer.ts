const initialState = {
    isInitialized: false,
    error: '',
}

export const appReducer = (state = initialState, action: AppActionType): InitialAppStateType => {
    switch (action.type) {
        case "APP/SET-IN-INITIALIZED": {
            return {...state, isInitialized: action.isInitialized}
        }
        case "APP/SET-ERROR": {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}

//actions
export const setIsInitialized = (isInitialized: boolean) => ({type: 'APP/SET-IN-INITIALIZED', isInitialized} as const)
export const setAppError = (error: string) => ({type: 'APP/SET-ERROR', error} as const)

// type
export type InitialAppStateType = typeof initialState
export type AppActionType =
    | ReturnType<typeof setIsInitialized>
    | ReturnType<typeof setAppError>