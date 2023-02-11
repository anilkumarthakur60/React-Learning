const data = [
    {name: 'John', age: 20},
    {name: 'Jane', age: 30},
    {name: 'Jack', age: 40},
    {name: 'Jill', age: 50},
    {name: 'Jenny', age: 60},
    {name: 'Jen', age: 70},
    {name: 'Jenifer', age: 80},
    {name: 'Jeniffer', age: 90},
    {name: 'Jeniffer', age: 100},
]


function getSortValue(vegetable) {
    return vegetable.name;
}


const sortOrder = 'desc';
data.sort((a, b) => {
    const aValue = getSortValue(a);
    const bValue = getSortValue(b);

    const reverseOrder = sortOrder === 'asc' ? 1 : -1;

    if (typeof aValue === 'string') {
        return aValue.localeCompare(bValue) * reverseOrder;
    }
    return (aValue - bValue) * reverseOrder;
});