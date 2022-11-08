import {appReducer, InitialAppStateType, setAppError, setIsInitialized} from "./app-reducer";

let state: InitialAppStateType

beforeEach(() => {
    state = {
        isInitialized: false,
        error: '',
    }
})

test('set in initialized', () => {
    const appReducerTest = appReducer(state, setIsInitialized(true))
    expect(appReducerTest.isInitialized).toBe(true)
})

test('set error', () => {
    const appReducerTest = appReducer(state, setAppError('Error messages'))
    expect(appReducerTest.error).toBe('Error messages')
})


