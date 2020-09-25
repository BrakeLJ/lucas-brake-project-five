import React from "react";
import axios from "axios";

const Search = () => {

    // Call to the Marvel API to get hero data using user input 
    getHeroes = () => {
        axios({
            method: 'GET',
            url: 'http://gateway.marvel.com/v1/public/characters',
            dataResponse: 'json',
            params: {
                // nameStartsWith: VALUEFROM-USER,
                ts: '',
                apikey: '',
                hash: ''
            },
        }).then(results => {
            results = results.data.results;
            this.setState({
                heroes: results,
                // loading state?
            })
        })
    }

    return (
        <>
            <fieldset>
                <legend className="sr-only">Hero search field</legend>
                <form action="">
                    <label htmlFor="search" for>Search for a hero</label>
                    <input type="search" name="search" id="search"/>
                    <input onClick={getHeroes} type="submit" value="Assemble!"/>
                </form>
            </fieldset>
        </>
    );
};

export default Search;
