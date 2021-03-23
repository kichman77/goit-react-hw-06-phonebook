// const addContact = (contact) => {
//   return {
//     type: "ADD_CONTACT",
//     payload: { id: contact.id, name: contact.name, phone: contact.phone },
//   };
// };

// const deleteContact = (id) => {
//   return {
//     type: "DELETE_CONTACT",
//     payload: { id },
//   };
// };
// export default { addContact, deleteContact };
import { createAction } from "@reduxjs/toolkit";
import actionTypes from "../actionTypes";
const addContact = createAction(actionTypes.ADD_CONTACT);
const deleteContact = createAction(actionTypes.DELETE_CONTACT);

export default { addContact, deleteContact };
