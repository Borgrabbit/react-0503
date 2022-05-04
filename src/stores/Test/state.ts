import { AsyncModel, createAsyncModel } from 'outqource-react/redux';

export const stateItemKeys = ['requestSend'];

export type TestState = {
  requestSend: AsyncModel;
};

const initialState: TestState = {
  requestSend: createAsyncModel(),
};

export default initialState;
