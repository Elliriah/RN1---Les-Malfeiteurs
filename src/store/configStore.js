// Imports: Dependencies
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';// Imports: Redux
import thunk from 'redux-thunk';
import rootReducer from './reducerList';// Middleware: Redux Persist Config

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'userReducer',
  ],
  // Blacklist (Don't Save Specific Reducers)
//   blacklist: [
//     //'counterReducer',
//   ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk),
);// Middleware: Redux Persist Persister
const persistor = persistStore(store);// Exports
export {
  store,
  persistor,
};
