import React from "react";

import "./Card.css"
const CardBackground = ({ children }) => {
    return (
        <div className="card cardBackgound">
            {children}
        </div>
    );
};

export default CardBackground;