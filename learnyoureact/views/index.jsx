var React = require('react');
    
var TodoBox = React.createClass({
  render: function() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
});

var Todo = React.createClass({
  // {this.props.title} == value passed to title attribute
  // {this.props.children} == innerHTML

  render: function(){
    var todoStyles = {
      title: {
        border: '1px solid black'
      },
      children: {
        border: '1px solid black'
      }
    };
    return (
      <tr>
        <td style={todoStyles.title}>{this.props.title}</td>
        <td style={todoStyles.children}>{this.props.children}</td>
      </tr>
    );
  }
});

var TodoForm = React.createClass({
  render: function(){
  	return (
  		<div className= "todoForm">
    		I am a TodoForm.
    	</div>
  	);
  }
});

module.exports = TodoBox;
