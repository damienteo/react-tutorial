import React, { Component } from 'react';
import Counter from './counter';

// To render Counter in the index.js, we can simply use <Counter />
// <Counter />
// if we want to render Counter multiple times, we may wish to use .map method instead of hard-coding

class Counters extends Component {

	//destructuring allows us to remove this.props accordingly, making code cleaner

	render() {
		const { onReset, counters, onDelete, onIncrement } = this.props;

		return (
			<div>	
				<button 
					onClick={onReset}
					className="btn btn-primary btn-sm m-2">Reset</button>
					{counters.map(counter =>  
						(<Counter 
						key={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						counter={counter}
						/>
						))}
			</div>
			)
	}
}

export default Counters;