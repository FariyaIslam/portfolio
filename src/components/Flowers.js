import React from 'react'

const Flowers = () => {
    let buckets = ["sunflower", "rosemarry", "lotas"];
    return (
        <div>
            {
                buckets.map(bucket =>
                    <h2>{bucket}</h2>)
            }


        </div>
    )
}

export default Flowers
