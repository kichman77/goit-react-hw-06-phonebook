const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER_CONTACT":
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
