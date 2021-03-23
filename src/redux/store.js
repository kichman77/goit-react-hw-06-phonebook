// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import contacts from "./redusers/contactsReducer";
import filter from "./redusers/filterReducer";
const store = configureStore({
  reducer: {
    contacts,
    filter,
  },
});
// const rootReducer = combineReducers({ contacts: contactReducer, filter: filterReducer });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
export default store;
