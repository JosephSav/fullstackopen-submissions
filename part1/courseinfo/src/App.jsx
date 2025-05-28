const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    );
};

const Part = (props) => {
    return (
        <>
            <p>
                {props.title} {props.exercises}
            </p>
        </>
    );
};

const Content = (props) => {
    return (
        <>
            <Part title={props.parts[0]} exercises={props.exercises[0]} />
            <Part title={props.parts[1]} exercises={props.exercises[1]} />
            <Part title={props.parts[2]} exercises={props.exercises[2]} />
        </>
    );
};

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.total}</p>
        </>
    );
};

const App = () => {
    const course = "Half Stack application development";
    const parts = [
        {
            name: "Fundamentals of React",
            exercises: 10,
        },
        {
            name: "Using props to pass data",
            exercises: 7,
        },
        {
            name: "State of a component",
            exercises: 14,
        },
    ];
    return (
        <>
            <Header course={course} />
            <Content
                parts={parts.map((p) => p.name)}
                exercises={parts.map((p) => p.exercises)}
            />
            <Total
                total={parts.map((p) => p.exercises).reduce((a, b) => a + b, 0)}
            />
        </>
    );
};

export default App;
