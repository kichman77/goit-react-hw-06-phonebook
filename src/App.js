import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import "./App.css";

const App = () => {
  return (
    <>
      <ContactForm/>
      <Filter/>
      <ContactList />
    </>
  );
};
// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
//     ],
//     name: "",
//     phone: "",
//     filter: "",
//   };

//   addContact = (obj) => {
//     const result = this.state.contacts.some((elem) => elem.name === obj.name);
//     result
//       ? alert(`Contact allready exist`)
//       : this.setState((prevState) => {
//           return {
//             contacts: [...prevState.contacts, obj],
//           };
//         });
//   };

//   getValue = (value) => {
//     console.log(value);
//     this.setState({ [value.name]: value.value });
//   };

//   toGetFiltetredContacts = () => {
//     return this.state.contacts.filter((contact) => {
//       return contact.name.toLowerCase().includes(this.state.filter);
//     });
//   };

//   getContactsList = () => {
//     const filteredContacts = this.toGetFiltetredContacts();
//     if (this.state.filter) return filteredContacts;
//     return this.state.contacts;
//   };
//   handleDelete = (id) => {
//     this.setState((prev) => {
//       const contacts = prev.contacts.filter((contact) => {
//         return !(contact.id === id);
//       });
//       return { contacts };
//     });
//   };

//   componentDidMount() {
//     // console.log("mount");
//     const data = localStorage.getItem("contactList");
//     // console.log(data);
//     if (data) {
//       this.setState({
//         contacts: JSON.parse(data),
//       });
//     }
//   }
//   componentDidUpdate(prevState) {
//     const { contacts } = this.state;
//     // console.log("update");
//     if (prevState.contact !== this.state.contacts) {
//       localStorage.setItem("contactList", JSON.stringify(contacts));
//     }
//   }
//   componentWillUnmount() {
//     // console.log("exit");
//   }

//   render() {
//     // console.log(this.state);
//     return (
//       <div className="App">
//         <h1>Phonebook</h1>
//         <ContactForm addContact={this.addContact} getValue={this.getValue} />
//         <h2>Contacts</h2>
//         <Filter filterContact={this.getValue} />
//         <ContactList
//           contacts={this.getContactsList()}
//           handleDelete={this.handleDelete}
//         />
//       </div>
//     );
//   }
// }

export default App;
