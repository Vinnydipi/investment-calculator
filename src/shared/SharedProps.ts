export interface YearlyData 
{
  	year: number;
  	yearlyInterest: number;
  	savingsEndOfYear: number;
	yearlyContribution: number;
	InitInvestment: number;
}

export interface UserInput 
{
  	"current-savings": string;
  	"yearly-contribution": string;
  	"expected-return": string;
	duration: string;
}