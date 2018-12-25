import React, { Component } from 'react';
import Counter from './counter';

// To render Counter in the index.js, we can simply use <Counter />
// <Counter />
// if we want to render Counter multiple times, we may wish to use .map method instead of hard-coding

class Counters extends Component {

	state = {
		counters: [
			{ id: 1, value: 1},
			{ id: 2, value: 0},
			{ id: 3, value: 2},
			{ id: 4, value: 3}
		]
	}

	render() {
		return (
			<div>
					{ this.state.counters.map(counter =>  
						(<Counter 
						key={counter.id}
						value={counter.value}>
							<h4>Counter #{counter.id}</h4>
						</Counter>)

					)}
			</div>
			)
	}
}

export default Counters;