import React, {Component} from 'react';

class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
      this.form = React.createRef();
      this.itemName = React.createRef();
    }
    //виконується після того, як вивід компонента був відрендерений у DOM
    componentDidMount() {
      this.itemName.current.focus();
    }
    onSubmit(event) {
      event.preventDefault();
      var newItemValue = this.itemName.current.value;
      
      if(newItemValue) {
        this.props.addItem({newItemValue});
        this.form.current.reset();
      }
    }
    render () {
      return (
        <form ref={this.form} onSubmit={this.onSubmit} className="form-inline">
          <input type="text" ref={this.itemName} className="form-control" placeholder="add a new todo..."/>
          <button type="submit" className="btn btn-primary">Add</button> 
        </form>
      );   
    }
  }

  export default TodoForm;