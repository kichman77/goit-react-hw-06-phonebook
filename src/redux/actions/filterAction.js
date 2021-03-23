const filterAction = (value) => {
  return {
    type: "FILTER_CONTACT",
    payload: value,
  };
};

export default { filterAction };
