const Persons = ({ persons }) => (
    <>
        {persons.map((person) => (
            <p key={crypto.randomUUID()}>
                {person.name} | {person.number}
            </p>
        ))}
    </>
);

export default Persons;
