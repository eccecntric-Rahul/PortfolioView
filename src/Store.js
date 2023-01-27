import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from "./Reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const initialState={};
const store = configureStore({
    reducer:rootReducer,
    middleware: [thunk,logger],
    devTools:true,
    preloadedState:initialState,
  });

export default store;