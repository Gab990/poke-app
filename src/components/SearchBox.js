import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2 tc">
            <input
                className="pa3 ba bw2 br3 b--blue bg-yellow"
                type="text"
                placeholder="Enter name here"
                onChange={searchChange} />
        </div>
    )
}

export default SearchBox;