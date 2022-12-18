import { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Converter() {

    const faArrowsElem = <FontAwesomeIcon icon={faArrowRightArrowLeft} />;

    const [state, setState] = useState({
        currencyFrom: "UAH",
        inputFrom: "",
        currencyTo: "USD",
        inputTo: "",
        date: "",
    });

    const { currencyFrom, inputFrom, currencyTo, inputTo, date } = state;

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/6b12bf543b13fee6ebdd0568/latest/${currencyFrom}`)
            .then((response) => response.json())
            .then((data) => {
                const rate = data.conversion_rates[currencyTo];
                setState({
                    ...state,
                    inputTo: Math.abs((rate * inputFrom).toFixed(2)),
                    date: new Date(data.time_last_update_utc).toLocaleString()
                })
            });
    }, [inputFrom, currencyFrom, currencyTo])

    const onChangeInput = (e) => {
        setState({
            ...state,
            inputFrom: e.target.value,
            inputTo: null,
            date: null,
        });
    };
    const handleSelect = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
            inputTo: null,
        });
    };

    const handleSwap = (e) => {
        e.preventDefault();
        setState({
            ...state,
            currencyTo: currencyFrom,
            currencyFrom: currencyTo,
            inputTo: null,
        });
    };

    const currencySignsAndValues = {
        'UAH': ['₴', 'Українська гривня'],
        'USD': ['$', 'Американський долар'],
        'EUR': ['€', 'Євро'],
    }

    return (
        <div className="converter">
            <div className="values-wrapper">
                <div>
                    {currencySignsAndValues[currencyFrom][0]}
                </div>
                <input className="values-input values-input-from"
                    name="value-from"
                    id="value-from"
                    type="number"
                    placeholder="0"
                    value={inputFrom}
                    onChange={(e) => { onChangeInput(e) }}
                />

                <select name="currencyFrom"
                    id="currencyFrom"
                    className="values-currency-select"
                    value={currencyFrom}
                    onChange={handleSelect}
                >
                    <option className="values-currency-option" value="UAH">UAH</option>
                    <option className="values-currency-option" value="USD">USD</option>
                    <option className="values-currency-option" value="EUR">EUR</option>
                </select>
            </div>

            <button className="button button-submit"
                onClick={(e) => handleSwap(e)}>
                {faArrowsElem}
            </button>

            <div className="values-wrapper">
                <div>
                    {currencySignsAndValues[currencyTo][0]}
                </div>
                <input className="values-input values-input-to"
                    name="value-to"
                    id="value-to"
                    disabled={true}
                    value={
                        inputFrom === ""
                            ? "0"
                            : inputTo === null
                                ? "Розраховуємо..."
                                : inputTo
                    }
                />

                <select name="currencyTo"
                    id="currencyTo"
                    className="values-currency-select"
                    value={currencyTo}
                    onChange={handleSelect}
                >
                    <option className="values-currency-option" value="UAH">UAH</option>
                    <option className="values-currency-option" value="USD">USD</option>
                    <option className="values-currency-option" value="EUR">EUR</option>
                </select>
            </div>
            <div className="converter-message">
                — Конвертація {currencyFrom}({currencySignsAndValues[currencyFrom][1]}) в {currencyTo}({currencySignsAndValues[currencyTo][1]}) станом на {date}
            </div>
        </div>
    )
}