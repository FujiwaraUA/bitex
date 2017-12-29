import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {res: []};
    this.url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10'
    this.request = require('request')

    this.getAPI = this.getAPI.bind(this);
    }

    componentDidMount() {
      this.getAPI();
    }

  getAPI () {
  this.request.get(this.url,(error, response, body) => {
      this.setState({res: JSON.parse(body)});
      console.log(this.state.res);
  })

}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />



        </header>
        {this.state.res.map(function(item, i){
        return(<p key={i} className="App-intro">
          {item.name} : {item.price_usd} USD
        </p>)
    })}
      </div>
    );
  }
}

export default App;
