import { useState } from "react";
import Filter from "./comps/Filter";
import PersonForm from "./comps/PersonForm";
import Persons from "./comps/Persons";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456789" },
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [addedPersons, setAddedPersons] = useState(new Set());
    const [filter, setFilter] = useState("");

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        console.log(event.target.value);
        setNewNumber(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleAddPerson = (event) => {
        event.preventDefault();
        const newPerson = { name: newName, number: newNumber };
        if (addedPersons.has(newName)) {
            alert(`"${newName}" is already added to phonebook.`);
            setNewName("");
            setNewNumber("");
        } else {
            const newSet = new Set(addedPersons);
            newSet.add(newName);
            setAddedPersons(newSet);
            console.log(addedPersons);

            setPersons(persons.concat(newPerson));
            setNewName("");
            setNewNumber("");
        }
    };

    const filteredPersons = () =>
        persons.filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
        );

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter handler={handleFilterChange} />
            <h3>add a new</h3>
            <PersonForm
                onSubmit={handleAddPerson}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />
            <h3>Numbers</h3>
            <Persons persons={filteredPersons()} filter={filter} />
        </div>
    );
};
export default App;
