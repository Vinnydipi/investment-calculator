import React, { useState } from "react";
import "./CalculatorForm.css";

// Interface
import { UserInput } from "../../shared/SharedProps";

interface props
{
  onSaveFormData: (event: UserInput) => void;
}

const CalculaterForm: React.FC<props> = ({ onSaveFormData }) =>
{   
    const [currentSavings, setCurrentSavings] = useState<string>('');
    const [yearlySavings, setYearlySavings] = useState<string>('')
    const [expectedReturns, setExpectedReturns] = useState<string>('');
    const [duration, setDuration] = useState<string>('');

    // Update states during input
    const setCurrentSavingsHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
        setCurrentSavings(event.target.value.toString());
    const setYearlySavingsHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
        setYearlySavings(event.target.value.toString());
    const setExpectedReturnsHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
        setExpectedReturns(event.target.value.toString());
    const setDurationHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
        setDuration(event.target.value.toString());
    
    const formSubmit = (event: React.ChangeEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        const userInput: UserInput = 
        {
            'current-savings': currentSavings,
            'yearly-contribution': yearlySavings,
            'expected-return': expectedReturns,
            duration: duration,
        }

        onSaveFormData(userInput)
        // Sets the values back to empty
        
    }

    const reset = () => 
    {
        // Clears the current user inputs
        setCurrentSavings('');
        setYearlySavings('');
        setExpectedReturns('');
        setDuration('');
    }

    return (
        <form className="form" onSubmit={formSubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input 
                type="number" 
                id="current-savings" 
                onChange={setCurrentSavingsHandler}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input 
                type="number" 
                id="yearly-contribution" 
                onChange={setYearlySavingsHandler}
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
                onChange={setExpectedReturnsHandler}    
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input 
                type="number" 
                id="duration" 
                onChange={setDurationHandler}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={reset}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    )
}

export default CalculaterForm;
