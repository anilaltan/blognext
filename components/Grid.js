import React from "react";

const Grid = ({ children }) => (
    <div>
        <div className="grid">{children}</div>

        <style jsx>
    {`
        .grid{
            display: grid;
            grid-template-columns: auto auto auto;
            justify-content: center;
            grid-gap: 2rem;
        }
    `}
    </style>
    </div>


);

export default Grid;