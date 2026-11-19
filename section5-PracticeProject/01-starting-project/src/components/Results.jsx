
import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ inputs }) {
    const results = calculateInvestmentResults(inputs);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>

            <tbody>
                {results.map((year) => {
                    const totalinterestdata =
                        year.valueEndOfYear -
                        inputs.initialInvestment -
                        (inputs.annualInvestment * year.year);

                    const totalamountinvested =
                        year.valueEndOfYear - totalinterestdata;

                    return (
                        <tr key={year.year}>
                            <td>{year.year}</td>
                            <td>{formatter.format(year.valueEndOfYear)}</td>
                            <td>{formatter.format(year.interest)}</td>
                            <td>{formatter.format(totalinterestdata)}</td>
                            <td>{formatter.format(totalamountinvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
