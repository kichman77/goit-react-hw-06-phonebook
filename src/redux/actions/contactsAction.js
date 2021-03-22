const addContact = (contact) => {
  return {
    type: "ADD_CONTACT",
    payload: { id: contact.id, name: contact.name, phone: contact.phone },
  };
};

export default addContact;
