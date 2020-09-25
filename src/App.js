//Imports
import React, { Component } from 'react';
import './App.css';
//Component imports
import Header from './components/Header'
import Footer from './components/Footer'
// import Search from "./components/Search";


class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      loading: false,
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <Search /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
