import React, { Component } from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import filterAction from "../../redux/actions/filterAction";

const Filter = ({ filter, filterContact, contacts }) => {
  // state = {
  //   filter: "",
  // };

  // hamdleChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  //   this.props.filterContact(event.target);
  // };

  // render() {
  return (
    <input
      className={styles.input}
      onChange={(event) => {
        return filterContact(event.target.value);
      }}
      placeholder="Find contacts by name"
      name="filter"
      type="text"
    />
  );
  // }
};
const mapStateToProps = (store) => {
  console.log(store.filter);
  return { filter: store.filter, contacts: store.contacts };
};
const mapDispatchToProps = { filterContact: filterAction.filterAction };
export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
};
