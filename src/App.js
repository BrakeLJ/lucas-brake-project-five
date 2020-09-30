//Imports
import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';

//Component imports
import Header from './components/Header'
import Footer from './components/Footer'
import Search from "./components/Search";


class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      loading: false,
    }
  }

  getHeroes = (e, userInput) => {
    e.preventDefault();
    axios({
      method: 'GET',
      url: 'http://gateway.marvel.com/v1/public/characters',
      dataResponse: 'json',
      params: {
        nameStartsWith: userInput,
        ts: '12345678',
        apikey: '74826c366b96b5cccf6669c19d47912b',
        hash: '0893c180424f6ddf206200bc03297222',
        limit: 100,
      }})
      .then(results => {
          results = results.data.data.results;
          this.setState({
          heroes: results,
      })
      if (this.state.heroes.length  === 0) {
      alert('Try again true believer!')
      }
      console.log(this.state.heroes);
    })
  }

    // handleChange = (e) => {
    //   this.setState({
    //     userInput: e.target.value,
    //   })
    // }
  

  render() {
    return (
      <div className="app">
        <Header />
        <Search getHeroes={this.getHeroes}/>
        <div className="wrapper">
          {/* <fieldset>
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
                onClick={this.getHeroes} 
                type="submit" 
                >Assemble!</button>
            </form>
          </fieldset> */}
  
          <ul className="hero-result">
            {this.state.heroes.map((hero) => {
              return(
                <li key={hero.id} className="hero-result__card">
                  <img src={`${hero.thumbnail.path}/standard_fantastic.jpg`}  alt="portrait of "/>
                  <div className="hero-result__text">
                    <h2>{hero.name}</h2>
                    <span># of Comics: {hero.comics.available}</span>
                    <p>{hero.description}</p>
                    <h3>Events</h3>
                    <ul>{hero.events.items.map((event) => {
                      return (
                        <li key={event.name}>{event.name}</li>
                      )
                    })}
                    <a href={hero.urls[1].url}>Learn More</a>
                    </ul>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
