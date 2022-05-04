import { createSlice, createAsyncExtraReducers, createAsyncActions } from 'outqource-react/redux';
import initialState, { stateItemKeys } from './state';
import * as Request from './promise';

const TestSlice = createSlice({
    name: 'Test',
    initialState,
    reducers: {
        ...createAsyncActions(stateItemKeys),
    },
    extraReducers: builder => {
        createAsyncExtraReducers(builder)(Request.requestSend, 'requestSend');
    }
})

export * from './promise';
export const TestAction = TestSlice.actions;
export default TestSlice.reducer;