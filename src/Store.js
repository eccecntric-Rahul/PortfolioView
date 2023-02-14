import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from "./Reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { checkJson } from './Utility/Utility';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

// let profile = localStorage.getItem('profile');
// let selectedProfile = localStorage.getItem('selectedProfile');
// let review = localStorage.getItem('reviewData')
// selectedProfile = checkJson(selectedProfile) ? JSON.parse(selectedProfile) : undefined;
// profile = checkJson(profile) ? JSON.parse(profile) : [];
// review = checkJson(review) ? JSON.parse(review) : {};
const initialState = {
  skills: [],
  training: [],
  experience: [],
  photos: [],
  details: [],
  education: [],
  project: [],
  selectedProfile: '',
  profile: '',
  searchVal: '',
  
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
  devTools: true,
  preloadedState: initialState,
});
export const persistor = persistStore(store);
export default store;
