import { createStore, combineReducers } from "redux";
import contactReducer from "./redusers/contactsReducer";
import filterReducer from "./redusers/filterReducer";
const rootReducer = combineReducers({ contacts: contactReducer, filter: filterReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
