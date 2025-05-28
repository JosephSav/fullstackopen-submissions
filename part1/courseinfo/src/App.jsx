const Header = (props) => {
    return (
        <>
            <h1>{props.text}</h1>
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
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    return (
        <>
            <Header text={course} />
            <Content
                parts={[part1, part2, part3]}
                exercises={[exercises1, exercises2, exercises3]}
            />
            <Total total={exercises1 + exercises2 + exercises3} />
        </>
    );
};

export default App;
