import React from 'react';
import '../Assets/Css/Table.css';

function Table({data, columns}) {
    return (

        <table>
            <thead>
            <tr>
                {
                    columns.map((item, index) => (
                        <th key={index}>{item}</th>
                    ))
                }
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td className={item.color}>{item.color}</td>
                    <td>{item.score}</td>
                </tr>
            ))}

            </tbody>
        </table>
    )

}

export default Table;