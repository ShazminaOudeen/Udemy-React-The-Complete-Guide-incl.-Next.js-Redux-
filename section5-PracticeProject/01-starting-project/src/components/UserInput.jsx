
export default function UserInput({ userinputs, onChange }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input
                        type="number"
                        id="initial-investment"
                        required
                        value={userinputs.initialInvestment}
                        onChange={(event) => onChange('initialInvestment', event.target.value)}
                    />
                </p>

                <p>
                    <label htmlFor="annual-contribution">Annual Investment</label>
                    <input
                        type="number"
                        id="annual-contribution"
                        required
                        value={userinputs.annualInvestment}
                        onChange={(event) => onChange('annualInvestment', event.target.value)}
                    />
                </p>

                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input
                        type="number"
                        id="expected-return"
                        required
                        value={userinputs.expectedReturn}
                        onChange={(event) => onChange('expectedReturn', event.target.value)}
                    />
                </p>

                <p>
                    <label htmlFor="investment-duration">Investment Duration</label>
                    <input
                        type="number"
                        id="investment-duration"
                        required
                        value={userinputs.duration}
                        onChange={(event) => onChange('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}
