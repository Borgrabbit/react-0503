import { useAsyncReducer, getAsyncActions } from 'outqource-react/redux';
import { TestAction } from './index';
import { stateItemKeys } from './state';
import * as Request from './promise';

const useTest = useAsyncReducer({
    ...getAsyncActions(TestAction, stateItemKeys),
    ...Request,
    stateKey: 'test',
    stateItemKeys,
  });
  
  export default useTest;
  