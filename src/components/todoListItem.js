import React, {Component} from "react";

class TodoListItem extends React.Component {
    constructor(props) {
      super(props);
      this.onClickClose = this.onClickClose.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
    }
    onClickClose() {
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    }
    onClickDone() {
      var index = parseInt(this.props.index);
      this.props.markTodoDone(index);
    }
    render () {
      var todoClass = this.props.item.done ? "done d-flex" : "undone d-flex";
      return(
        <li className="list-group-item ">
          <div className={todoClass}>
            <div className="taskText">{this.props.item.value}</div>
            <div className="panel-btn d-flex p-2 bd-highlight justify-content-end">
                <input className="close" type="checkbox" onClick={this.onClickDone}/>
                <span className="icon">{"status"}</span>
                <span><i className="fa fa-pencil-square-o icon" aria-hidden="true"></i></span>
                <span><i className="fa fa-trash close" aria-hidden="true"  onClick={this.onClickClose}></i></span>
            </div>
          </div>
        </li>     
      );
    }
  }

  export default TodoListItem;
  