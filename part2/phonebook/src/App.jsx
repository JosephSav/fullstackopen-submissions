import { useState } from "react";

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
            <div>
                filter shown with
                <input onChange={handleFilterChange} />
            </div>
            <h2>add a new</h2>
            <form onSubmit={handleAddPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number:{" "}
                    <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {filteredPersons().map((person) => (
                <p key={crypto.randomUUID()}>
                    {person.name} | {person.number}
                </p>
            ))}
            <div>debug: {filter}</div>
        </div>
    );
};
export default App;
