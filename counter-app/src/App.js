import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 1},
      { id: 2, value: 0},
      { id: 3, value: 2},
      { id: 4, value: 3}
    ]
  }

  // handleReset = () => {
  //  const counters = this.State.counters.map(c => {
  //    c.value = 0;
  //    return c;
  //  })
  //  this.setState({ counters });
  // };
  //above will not work because of lack of "single source of truth". Each of the counters have their own local state

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++
    this.setState({ counters });
  };
  //counters[0].value++; will modify the state directly, which is a no-no in React. To modify, we have to modify counter in the given location.

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  //onDelete will reference this function

  render() {
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        />
      </main>
      </React.Fragment>
    );
  }
}

export default App;
