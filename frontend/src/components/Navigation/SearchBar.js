import React, { useState } from "react"
import { useHistory } from "react-router-dom"


function SearchBar() {
    const history = useHistory();
    const [ city, setCity ] = useState('');


    function handleSubmit (e) {
        e.preventDefault();

        history.push(`/cities/${city.split(' ').join("-").toLowerCase()}`);

        return setCity('');
    }

    return (
        <div id="navbar__search-input">
            <form onSubmit={handleSubmit}>
                <div id="search-button" type="submit">
                    <i className="fas fa-search" />
                </div>
                <input className="search-bar__input" type="text" placeholder="Search a ny city" name="search-bar"
                    value={city}
                    onChange={(e) => (setCity(e.target.value))}
                ></input>
            </form>
        </div >
    )
}

export default SearchBar;
