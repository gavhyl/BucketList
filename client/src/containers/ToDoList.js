// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// class ToDoList extends Component {
// 	renderList(){
// 		return this.props.todos.map((todos) => {
// 			return (
// 					<li key={todos.name} className="list-group-item">{todos.name}</li>
// 					<li key={todos.category} className="list-group-item">{todos.category}</li>
// 					<li key={todos.finish} className="list-group-item">{todos.finish}</li>
// 				);
// 		});
// 	}

// 	render() {
// 		return (
// 				<ul className="list-group col-sm-4">
// 					{this.renderList()}
// 				</ul>
// 				<ul className="list-group col-sm-4">
// 					{this.renderList()}
// 				</ul>
// 				<ul className="list-group col-sm-4">
// 					{this.renderList()}
// 				</ul>								
// 			);
// 	}
// }

// function mapStateToProps(state){
// 	return{
// 		todos: state.todos
// 	};
// }

// export default connect(mapStateToProps)(ToDoList);