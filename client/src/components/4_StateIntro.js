import React from 'react';

class StateIntro extends React.Component {
	constructor(){
		super();
		this.state = {
			name: "Chance the Rapper",
			otherName: "Kendrick Lamar"
		}	
	}
	changeNameOne(event){
		this.setState({name: event.target.value})
	}
	changeNameTwo(event){
		this.setState({otherName: event.target.value})
	}

	render() {
		return (
				<div>
					<h3>State</h3>
					<p>Use the input field to see th state change</p>
					<input type="text" onChange={this.changeNameOne.bind(this)}/>
					<input type="text" onChange={this.changeNameTwo.bind(this)}/>
					<p>{this.state.name} and {this.state.otherName} are the greatest rappers on the planet</p>
				<hr />
				</div>
			);
	}
}

export default StateIntro;