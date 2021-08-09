import React from 'react'

const Reactmap = () => {
    let fruits = ["apple", "mango", "banana"];
    let cars = [
        { carName: "tesla", price: 388 },
        { carName: "BMW", price: 4343 },
        { carName: "BUGATI", price: 3323288 },
    ]
    return (
        <div>
            {cars.map(car =>
                <div>
                    <h1>{car.carName}</h1>
                    <p>{car.price}</p>
                </div>

            )}
        </div>
    )
}

export default Reactmap
