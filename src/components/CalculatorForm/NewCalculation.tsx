import React from 'react';
import CalculaterForm from './CalculatorForm';
import { UserInput, YearlyData } from '../../shared/SharedProps';

interface props
{
    onGettingData: (data: YearlyData []) => void;
}

const NewCalculation:React.FC<props> = ({ onGettingData }) =>
{
    const yearlyData: YearlyData[] = [];

    const onSaveFormDataHandler = (userInput: UserInput):void =>
    {
        // Gets data from form 
        const newFormData: UserInput = { ...userInput }
        // Performs calculation with given data
        newCalculationHandler(newFormData);
    }

    const newCalculationHandler = (userInput: UserInput): void => 
    {
        const InitInvestment = +userInput["current-savings"];
        let currentSavings = +userInput["current-savings"];
        const yearlyContribution = +userInput["yearly-contribution"];
        const expectedReturn = +userInput["expected-return"] / 100;
        const duration = +userInput["duration"];
  
        for (let i = 0; i < duration; i++) 
        {
      	    const yearlyInterest = +(currentSavings * expectedReturn).toFixed(2);
      	    currentSavings += +(yearlyInterest + yearlyContribution).toFixed(2);
      	    yearlyData.push({
      		    year: i + 1,
      		    yearlyInterest: yearlyInterest,
      		    savingsEndOfYear: +(currentSavings.toFixed(2)),
      		    yearlyContribution: yearlyContribution,
                InitInvestment: +(InitInvestment.toFixed(2)),
        	});
        }
      onGettingData(yearlyData);
      
    };

    return (
        <CalculaterForm  onSaveFormData={onSaveFormDataHandler}/>
    )
}

export default NewCalculation;
