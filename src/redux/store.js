import { createStore, combineReducers } from "redux";
import reducer from "./redusers/contactsReducer";

const rootReducer = combineReducers({ contacts: reducer });

const store = createStore(
  rootReducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

export default store;
