import React from 'react'

const Example = () => {
    let adds = ["xyz", "abc", "ijk"];
    let humans = [
        { features: "black", age: "10" },
        { features: "white", age: "11" },
        { features: "brown", age: "12" },
    ]
    return (
        <div>
            {humans.map(human =>
                <div>
                    <h1>{human.features}</h1>
                    <p>{human.age}</p>
                </div>
            )}

        </div>
    )
}

export default Example
