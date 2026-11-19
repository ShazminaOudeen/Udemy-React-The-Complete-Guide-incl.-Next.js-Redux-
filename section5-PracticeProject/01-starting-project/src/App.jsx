
import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/Userinput.jsx';
import Results from './components/Results.jsx';

function App() {
    const [userinputs, setuserInputs] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputisvalid = userinputs.duration >= 1;

    function handlechange(inputidentifier, newvalue) {
        setuserInputs((prevInputs) => {
            return {
                ...prevInputs,
                [inputidentifier]: newvalue
            };
        });
    }

    return (
        <>
            <Header />

            <UserInput userinputs={userinputs} onChange={handlechange} />

            {!inputisvalid && (
                <p style={{ color: 'white', textAlign: 'center' }}>
                    Please enter a valid duration (at least 1 year).
                </p>
            )}

            {inputisvalid && <Results inputs={userinputs} />}
        </>
    );
}

export default App;
