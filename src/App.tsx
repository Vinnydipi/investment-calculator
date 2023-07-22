import React, { useState } from "react";

// Components
import Card from "./components/UI/Card";
import Header from "./components/Header/Header";

import Table from "./components/Table/Table";
import NewCalculation from "./components/CalculatorForm/NewCalculation";
import { YearlyData } from "./shared/SharedProps";

const App = () =>
{

	const [data, setData] = useState<YearlyData []>([]);

  	const getDataHandler = (inputData: YearlyData []) =>
  	{
		setData((data) => 
		{
			return [...inputData, ...data];
		});
  	}

	if (data.length === 0)
	{
		return (
			<Card>
				<Header />
				<NewCalculation onGettingData={getDataHandler} />
			</Card>
		)
	}

  return (
	<Card>
    	<Header/>
    	<NewCalculation  onGettingData={getDataHandler}/>
		<Table  yearlyData={data}/>
	</Card>
  );
}

export default App;
