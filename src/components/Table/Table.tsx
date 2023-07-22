import React from "react";
import TableHeader from "./TableHeader";

// CSS
import "./Table.css";
import TableBody from "./TableBody";
import { YearlyData } from "../../shared/SharedProps";

interface props 
{
    yearlyData: YearlyData [];
}

const Table: React.FC<props> = ({ yearlyData }) =>
{
    return (
        <table className="result">
			<TableHeader />
			<TableBody data={yearlyData}/>
      	</table>
    )
}

export default Table;