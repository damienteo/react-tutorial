import React, { Component } from 'react';

class Counter extends Component {

	// state shows any data that the object will need
	// state = {
	// 	value: this.props.counter.value,
	// 	//props is a plain javascript object that includes all the attributes in counter.
	// 	// imageUrl: 'https://picsum.photos/200'
	// 	// <img src={this.state.imageUrl} alt=""/>
	// 	tags: ['tag1', 'tag2', 'tag3']
	// };
//the component that owns a piece of the state will be the one modifying it

// differences between props and state: props include data that you give to a component. state includes data local or private to that component. props is also read-only.

//binding event handlers. 'this' in javascript behaves differently. If 'this' is called as a 'obj.method', 'this' will have a reference to the object.
// If 'this' is called as a standalone, 'this will refer to the window'

	// constructor() {
	// 	super();
	// 	this.handleIncrement.bind(this);
	// }

	// handleIncrement() {
	// 	console.log('Increment Clicked', this);
	// }

	// handleIncrement = () => {
	// 	// console.log('Increment Clicked', this);
	// 	// this.state.count++ does not work, have to explicitly tell React what has changed
	// 	this.setState({ value: this.state.value + 1})
	// }
	// Instead of binding, you can convert the function into an arrow function. Arrow functions doe not re-bind 'this'. However, they inherit 'this'.

	//whenever you need to pass a function to an eventhandler (onclick), use an arrow function to pass an argument.

	// styles = {
	// 	fontSize: '50px',
	// 	fontWeight: 'bold'
	// };
	// style={this.styles}

	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no tags!</p>;
		return <ul>
					{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
				</ul>
	}

				//<div>
					//{this.state.tags.length===0 && "Please create a new tag!"}
					//{this.renderTags()}
				//</div>

	render() {
		// let classes = "badge m-2 badge-";
		// classes += (this.state.count === 0) ? "warning" : "primary";



		return (
			<div>
				{this.props.children}
				<span className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button 
					onClick={() => this.props.onIncrement(this.props.counter) } 
					className="btn btn-secondary btn-sm">
					Increment
				</button>
				<button 
					onClick={() => this.props.onDelete(this.props.counter.id)} 
					className="btn btn-danger btn-sm m-2">
					Delete
				</button>
			</div>
			);
	}
	//curly braces allows for expressions, anything that provides a value

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += (this.props.counter.value === 0) ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value }= this.props.counter;
		return value === 0 ? 'Zero' : value;
	}
}

export default Counter;