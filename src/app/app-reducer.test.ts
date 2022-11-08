import {appReducer, InitialAppStateType, setAppError, setIsInitialized} from "./app-reducer";

let state: InitialAppStateType

beforeEach(() => {
    state = {
        isInitialized: false,
        error: '',
    }
})

test('set in initialized', () => {
    const appReducer1 = appReducer(state, setIsInitialized(true))
    expect(appReducer1.isInitialized).toBe(true)
})

test('set error', () => {
    const appReducer1 = appReducer(state, setAppError('Error messages'))
    expect(appReducer1.error).toBe('Error messages')
})


