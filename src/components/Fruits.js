import React from 'react'

const Fruits = () => {
    let buckets = ["banana", "lemon", "mango"];
    return (
        <div>
            {buckets.map(bucket =>
                <h1>{bucket}</h1>)
            }
        </div>
    )
}

export default Fruits
