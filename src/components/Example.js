import React from 'react'

const Example = () => {
    let adds = ["xyz", "abc", "ijk"];
    return (
        <div>
            {
                adds.map(add =>
                    <h1>{add}</h1>
                )
            }

        </div>
    )
}

export default Example
