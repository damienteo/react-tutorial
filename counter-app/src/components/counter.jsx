import React, { Component } from 'react';

class Counter extends Component {

	// state shows any data that the object will need
	state = {
		count: 1,
		// imageUrl: 'https://picsum.photos/200'
		// <img src={this.state.imageUrl} alt=""/>
	};

	// styles = {
	// 	fontSize: '50px',
	// 	fontWeight: 'bold'
	// };
	// style={this.styles}

	render() {
		// let classes = "badge m-2 badge-";
		// classes += (this.state.count === 0) ? "warning" : "primary";

		return (
			<div>
				<span className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button className="btn btn-secondary btn-sm">Increment</button>
			</div>
			);
	}
	//curly braces allows for expressions, anything that provides a value

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += (this.state.count === 0) ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { count }= this.state;
		return count === 0 ? 'Zero' : count;
	}
}

export default Counter;