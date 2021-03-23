const addContact = (contact) => {
  return {
    type: "ADD_CONTACT",
    payload: { id: contact.id, name: contact.name, phone: contact.phone },
  };
};

const deleteContact = (id) => {
  return {
    type: "DELETE_CONTACT",
    payload: { id },
  };
};
export default { addContact, deleteContact };
