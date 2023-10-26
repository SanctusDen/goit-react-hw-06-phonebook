import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { ContactFormReducer } from './ContactFormReducer';

const configureStore = combineReducers({
  ContactForm: ContactFormReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(configureStore, enhancer);
