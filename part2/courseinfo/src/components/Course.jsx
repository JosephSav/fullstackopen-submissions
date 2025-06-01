const Header = ({ name }) => <h2>{name}</h2>;

const Content = ({ parts }) => (
    <div>
        {parts.map((part) => (
            <Part key={part.id} part={part} />
        ))}
    </div>
);

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
);

const Total = ({ parts }) => {
    var total = parts.reduce((acc, cur) => acc + cur.exercises, 0);
    return <b>Total of {total} exercises</b>;
};

const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    );
};

export default Course;
