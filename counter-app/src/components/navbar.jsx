import React, { Component } from "react";

//stateless functional component
//only props is used, 
// const NavBar = (props) => {
// 		return(
// 			<nav className="navbar navbar-light bg-light">
// 			  <a className="navbar-brand" href="#">
// 			  	Navbar <span className="badge badge-pill badge-secondary"> {props.totalCounters}</span>
// 			  </a>
// 			</nav>
// 			);
// }

// class NavBar extends Component {
// 	render() {
// 	}
// }

const NavBar = ({ totalCounters }) => {
		return(
			<nav className="navbar navbar-light bg-light">
			  <a className="navbar-brand" href="#">
			  	Navbar <span className="badge badge-pill badge-secondary"> {totalCounters}</span>
			  </a>
			</nav>
			);
}

export default NavBar;