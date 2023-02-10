import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from "./Reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { checkJson } from './Utility/Utility';


let profile = localStorage.getItem('profile');
let selectedProfile = localStorage.getItem('selectedProfile');
let review =  localStorage.getItem('reviewData')
selectedProfile=checkJson(selectedProfile)?JSON.parse(selectedProfile):undefined;
profile=checkJson(profile)?JSON.parse(profile):[];
review=checkJson(review)?JSON.parse(review):{};
const initialState={
  skills:[],
  training:[],
  experience:[],
  photos:[],
  details:[],
  education:[],
  project:[],
  selectedProfile:selectedProfile,
  profile:profile,
  searchVal:'',
  ...review
};
const store = configureStore({
    reducer:rootReducer,
    middleware: [thunk,logger],
    devTools:true,
    preloadedState:initialState,
  });

export default store;