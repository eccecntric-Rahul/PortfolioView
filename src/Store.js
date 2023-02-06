import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from "./Reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger'


const profile = localStorage.getItem('profile');
const selectedProfile = localStorage.getItem('selectedProfile');
const initialState={
  skills:[],
  training:[],
  experience:[],
  selectedProfile:selectedProfile?JSON.parse(selectedProfile):undefined,
  profile:profile?JSON.parse(profile):[],
};
const store = configureStore({
    reducer:rootReducer,
    middleware: [thunk,logger],
    devTools:true,
    preloadedState:initialState,
  });

export default store;