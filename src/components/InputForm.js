import React, { useState } from "react";
import "./InputForm.css";
function InputForm(props) {
  const [enteredCurrentSavings, setEnteredCurrentSavings] = useState(10000);
  const [enteredYearlyContribution, setEnteredYearlyContribution] =
    useState(1200);
  const [enteredExpectedReturn, setEnteredExpectedReturn] = useState(7);
  const [enteredDuration, setEnteredDuration] = useState(10);

  const currentSavingChangeHandler = (event) => {
    setEnteredCurrentSavings(+ event.target.value);
  };
  const yearlyContributionChangeHandler = (event) => {
    setEnteredYearlyContribution(+ event.target.value);
  };
  const expectedReturnChangeHandler = (event) => {
    setEnteredExpectedReturn(+ event.target.value);
  };
  const durationChangeHandler = (event) => {
    setEnteredDuration(+ event.target.value);
  };


  const resetHandler = () => {
    setEnteredCurrentSavings(10000);
    setEnteredYearlyContribution(1200);
    setEnteredExpectedReturn(7);
    setEnteredDuration(10);
   props.onSaveYearlyData([]);
  };
  const calculateHandler = (event) => {
    event.preventDefault();
    
    const yearlyData = []; // per-year results

    let currentSavings = +enteredCurrentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +enteredYearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +enteredExpectedReturn / 100;
    const duration = +enteredDuration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    props.onSaveYearlyData(yearlyData);
    props.savings(enteredCurrentSavings);
  };

  return (
    <form className="form" onSubmit={calculateHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={enteredCurrentSavings}
            onChange={currentSavingChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={enteredYearlyContribution}
            onChange={yearlyContributionChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={enteredExpectedReturn}
            onChange={expectedReturnChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={enteredDuration}
            onChange={durationChangeHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
export default InputForm;
