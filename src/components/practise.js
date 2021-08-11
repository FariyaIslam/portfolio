import React from 'react'

const practise = () => {
    let vals = [
        { name: "anan", age: "22" },
        { name: "ana", age: "23" },

    ]
    return (
        <div>
            {
                vals.map(val =>
                    <div>
                        <h1>{val.name}</h1>
                    </div>


                )
            }
        </div>
    )
}

export default practise
