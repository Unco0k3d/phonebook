import React, { useState, useEffect } from "react";
import Contacts from "./components/Contacts";
import Search from './components/Search'
import AddContact from './components/AddContact'
import Notification from './components/Notification'
import personService from './services/persons'
import axios from 'axios'

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [confirm,setConfirm]=useState(null)

  useEffect(()=>{
    // personService
    // .getAll()
    axios.get('http://localhost:3001/persons')
    .then(response=>setPersons(response.data))
  },[])

  const handleSearchValue = (e) => setSearch(e.target.value);
  const handleNameValue = (e) => setNewName(e.target.value);
  const handleNumberValue = (e) => setNewNumber(e.target.value);
  
  const replaceNumber=(newContactObj)=>{
    window.confirm(`${newContactObj.name} is already in your contacts dummy. Did you want to replace the number dummy?`)
    const contact=persons.find(p=>p.name===newContactObj.name)
    const changedContact={...contact, number: newNumber}
    axios.put(`http://localhost:3001/persons/${contact.id}`,changedContact)
      .then(response=>setPersons(persons.map(p=>p.id===contact.id?
        response.data : p
        )))
  }

  const addContact = (e) => {
    e.preventDefault();
    const newContactObj = { name: newName, number: newNumber };
    persons.find(
      ({ name }) => name.toLowerCase() === newContactObj.name.toLowerCase()
    )
      ? replaceNumber(newContactObj)
      : personService
          .create(newContactObj)
          .then(returnedPerson=>{
            setPersons(persons.concat(returnedPerson))
          })
          .then(success=>{
            setConfirm(`${newName} has been added`)
            setTimeout(()=>setConfirm(null),3000)
          })
          setNewName('')
          setNewNumber('')
  };

  const remove=(id)=>{
    const person = persons.find(p=>p.id===id)
    window.confirm(`are your sure you want to throw ${person.name} out and burn them?`)
    axios
    .delete(`http://localhost:3001/persons/${id}`)
    .then(setPersons(persons.filter(p=>p.id!==id)))
  }

  useEffect(() => {
    const results = persons.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()))
    setSearchResults(results)
  }, [search,persons]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Search handleSearchValue={handleSearchValue} search={search} />
      <h2>Add Contacts</h2>
      <Notification confirm={confirm} />
      <AddContact addContact={addContact}
                  handleNameValue={handleNameValue}
                  newName={newName}
                  handleNumberValue={handleNumberValue}
                  newNumber={newNumber}
                  />
      <h2>Contacts</h2>
      <div>
        {searchResults.map((c, i) => (
          <Contacts key={i} contact={c} remove={()=>remove(c.id)} />
        ))}
      </div>
    </div>
  );
}

export default App;
