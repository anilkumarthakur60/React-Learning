
import React from 'react';
import  '../Assets/Css/Table.css';
function Table() {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Score</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Orange</td>
                <td>bg-orange-500</td>
                <td>500</td>
            </tr>
            <tr>
                <td>Red</td>
                <td>bg-red-500</td>
                <td>23</td>
            </tr>
            <tr>
                <td>Banana</td>
                <td>bg-yellow-500</td>
                <td>35</td>
            </tr>


            </tbody>
        </table>
    )

}

export default Table;