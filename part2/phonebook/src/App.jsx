import { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");
    const [addedPersons, setAddedPersons] = useState(new Set());

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value);
    };

    const handleAddPerson = (event) => {
        event.preventDefault();
        const newPerson = { name: newName };
        if (addedPersons.has(newName)) {
            alert(`"${newName}" is already added to phonebook.`);
            setNewName("");
        } else {
            const newSet = new Set(addedPersons);
            newSet.add(newName);
            setAddedPersons(newSet);
            console.log(addedPersons);

            setPersons(persons.concat(newPerson));
            setNewName("");
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleAddPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <p key={crypto.randomUUID()}>{person.name}</p>
            ))}
            <div>debug: {newName}</div>
        </div>
    );
};
export default App;
