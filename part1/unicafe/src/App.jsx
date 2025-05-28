import { use, useState } from "react";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>
            {value} {text === "positive" ? "%" : ""}
        </td>
    </tr>
);

const Statistics = ({ good, neutral, bad, all }) => {
    return (
        <table>
            <tbody>
                <StatisticLine text='good' value={good} />
                <StatisticLine text='neutral' value={neutral} />
                <StatisticLine text='bad' value={bad} />
                <StatisticLine text='all' value={all} />
                <StatisticLine
                    text='average'
                    value={(good - bad) / (all ? all : 1)}
                />
                <StatisticLine
                    text='positive'
                    value={(good / (all ? all : 1)) * 100}
                />
            </tbody>
        </table>
    );
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);

    const handleGood = () => {
        setGood(good + 1);
        setAll(all + 1);
    };
    const handleNeutral = () => {
        setNeutral(neutral + 1);
        setAll(all + 1);
    };
    const handleBad = () => {
        setBad(bad + 1);
        setAll(all + 1);
    };

    return (
        <>
            <h1>give feedback</h1>
            <div>
                <Button text='good' onClick={() => handleGood()} />
                <Button text='neutral' onClick={() => handleNeutral()} />
                <Button text='bad' onClick={() => handleBad()} />
            </div>
            <h1>statistics</h1>
            {all ? (
                <Statistics good={good} neutral={neutral} bad={bad} all={all} />
            ) : (
                <p>No feedback given</p>
            )}
        </>
    );
};

export default App;
