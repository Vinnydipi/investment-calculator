import React from "react";
import TableRow from "./TableRow";
import { YearlyData } from "../../shared/SharedProps";

interface props
{
    data: YearlyData [];
}

const TableBody: React.FC<props> = ({ data }) =>
{

    return (
        <tbody>
            {data.map((row) => (
                <TableRow key={row.year} rowData={row} />
            ))}
        </tbody>
    )
}

export default TableBody;