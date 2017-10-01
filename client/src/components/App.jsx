import React from 'react';
import Navbar from './Navbar';
import InputForm from './InputForm';
import Results from './Results';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      results: []
    }

    this.submitAddress = this.submitAddress.bind(this);
  }

  submitAddress(address) {
    this.setState({address});
    axios.get(`/search?address=${address}`)
    .then(results => {
      console.log(results);
      this.setState({results});
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <InputForm submitAddress={this.submitAddress} />
        <hr />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
