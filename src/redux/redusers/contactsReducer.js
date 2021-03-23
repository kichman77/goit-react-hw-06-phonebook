const contacts = JSON.parse(localStorage.getItem("contacts")) || [
  { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
  { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
];

const contactReducer = (state = contacts, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      console.log(state);
      const addState = [...state, action.payload];
      localStorage.setItem("contacts", JSON.stringify(addState));
      return addState;
    case "DELETE_CONTACT":
      const deleteState = state.filter(
        (contact) => contact.id !== action.payload.id
      );
      localStorage.setItem("contacts", JSON.stringify(deleteState));

      return deleteState;

    default:
      return state;
  }
};

export default contactReducer;
