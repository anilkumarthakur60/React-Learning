import React from 'react'
import {useSelector} from "react-redux";

function CarValue() {


    const data1 = useSelector(({cars: {cars, searchTerms}}) => {


        return cars.filter((car) => {
            if (!searchTerms) return true;
            return car.name.toLowerCase().includes(searchTerms.toLowerCase());
        })
            .reduce( (previous, current)=>previous + parseInt(current.cost), 0);


        const filteredData1 = cars.filter((car) => {
            if (!searchTerms) return true;
            return car.name.toLowerCase().includes(searchTerms.toLowerCase());
        });

        return filteredData1.reduce(function (previous, current) {
            return previous + parseInt(current.cost);
        }, 0)
    });

    const data = [
        {name: 'car1', cost: 100},
        {name: 'car2', cost: 200},
        {name: 'car3', cost: 300},
        {name: 'car4', cost: 400},
        {name: 'car5', cost: 500},

    ];
    const total = data.reduce(function (prev, cur) {
        return prev + parseInt(cur.cost);
    }, 0)

    return (
        <div className="">
            Total Cost:{data1}
        </div>
    )
}

export default CarValue;