import { createAsyncThunk, createAsyncPaginationThunk, AsyncThunkExtraOptions, createAsyncRefreshThunk } from 'outqource-react/redux';
import onRequest from './axios';
//import { onRequest } from 'common';

const getCreateAsyncThunk = <D = any>(name: string, url: string) => {
  return createAsyncThunk(name, async (data: D, { rejectWithValue }) => {
    const response = await onRequest({ url, data });
    if (response.status === 200) {
      return response.data;
    } else {
      return rejectWithValue(response);
    }
  });
};

const getCreateAsyncPaginationThunk = <D = any>(name: string, url: string, options?: AsyncThunkExtraOptions) => {
  return createAsyncPaginationThunk(
    name,
    async (data: D, { rejectWithValue }) => {
      const response = await onRequest({ url, data });
      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue(response);
      }
    },
    options,
  );
};

const getCreateAsyncRefreshThunk = <D = any>(name: string, url: string) => {
  return createAsyncRefreshThunk(name, async (data: D, { rejectWithValue }) => {
    const response = await onRequest({ url, data });
    if (response.status === 200) {
      return response.data;
    } else {
      return rejectWithValue(response);
    }
  });
};

export { getCreateAsyncThunk, getCreateAsyncPaginationThunk, getCreateAsyncRefreshThunk };
