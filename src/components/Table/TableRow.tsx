import React from "react";
import { YearlyData } from "../../shared/SharedProps";

interface props
{
    rowData: YearlyData;
}

const TableRow: React.FC<props> = ({ rowData }) =>
{

    return (
        <tr>
            <td>{rowData.year}</td>
            <td>${rowData.savingsEndOfYear.toLocaleString()}</td>
            <td>${rowData.yearlyInterest.toLocaleString()}</td>
            <td>${(rowData.savingsEndOfYear - rowData.InitInvestment - rowData.yearlyContribution * rowData.year).toLocaleString()}</td>
            <td>${(rowData.InitInvestment + rowData.yearlyContribution * rowData.year).toLocaleString()}</td>
        </tr>
    )
}

export default TableRow;