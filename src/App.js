//Imports
import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';

//Component imports
import Header from './components/Header';
import Search from "./components/Search";
import Footer from './components/Footer';

//State declaration 
class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
    }
  }

  //Axios call function (attached to button in Search.js)
  getHeroes = (e, userInput) => {
    e.preventDefault();
    axios({
      method: 'GET',
      url: 'https://gateway.marvel.com/v1/public/characters',
      dataResponse: 'json',
      params: {
        nameStartsWith: userInput, //userInput state lives in Search.js
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
      //error handling for no results
      if (this.state.heroes.length  === 0) {
      alert('Need to be a bit more specific. Try again true believer!')
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        {/* Search bar and submit button tied to getHeroes function  */}
        <Search getHeroes={this.getHeroes}/>
        <div className="wrapper">

          <ul className="hero-result">
            {this.state.heroes.map((hero) => {
              return(
                <li key={hero.id} className="hero-result__card">
                  <img src={`${hero.thumbnail.path}/standard_fantastic.jpg`}  alt="portrait of "/>
                  <div className="hero-result__text-box">
                    <h2>{hero.name}</h2>
                    <span className="hero-result__comics"># of comics hero appears in: {hero.comics.available}</span>
                    {/* error handling for no hero description  */}
                    {hero.description === "" 
                      ? <p>Hmm, our records seem to be incomplete for this hero. Try the "Learn More" link for the official Marvel hero page.</p> 
                      : <p className="hero-result__description">{hero.description}</p>}
                    <a className="hero-result__link" href={hero.urls[1].url}>Learn More</a>
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
