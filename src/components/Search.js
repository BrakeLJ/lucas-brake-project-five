import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    };
  }


  //function attached to onChange on input element
  handleChange = (e) => {
    this.setState({
    userInput: e.target.value,
    })
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <fieldset>
            <legend className="sr-only">Hero search field</legend>
            <form className="form">
            <label htmlFor="search">Search for a hero</label>
            <input 
              className="form__input"
              onChange={this.handleChange} 
              type="search" 
              name="search" 
              id="search" 
              value={this.state.userInput} />
            <button 
              className="form__btn btn"
              onClick={(e) => this.props.getHeroes(e, this.state.userInput)} 
              type="submit" 
            >Assemble!</button>
          </form>
          </fieldset>
        </div>
      </>
    );
  }
};

export default Search;



