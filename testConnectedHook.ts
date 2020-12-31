import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const fakeReducer = (state = {}, action: { type: string; payload?: any }) => {
  if (action.type === 'UPDATE') return { ...action.payload.newState };
  return state;
};

const createFakeStore = (state: Record<string, any>) => {
  const store = createStore(fakeReducer, state);
  const updateStore = (newState: Record<string, any>) => {
    store.dispatch({ type: 'UPDATE', payload: { newState } });
  };
  return { updateStore, store };
};

export const connectedWrapper = (state: Record<string, any>) => {
  const { store, updateStore } = createFakeStore(state);
  const wrapper = ({ children }) => (<Provider store={store}>{children}</Provider>);
  return { wrapper, updateStore, store };
};
