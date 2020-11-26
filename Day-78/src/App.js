import React from 'react';
import './App.css';

export default class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      todoText: "",
      list: []
    };
  }

  updatedTodoText (text) {
    const list = this.state.list;
    this.setState({todoText: text, list});
  }

  addTodoItem () {
    const list = this.state.list;
    list.push(this.state.todoText);
    this.setState({list, todoText: this.state.todoText});
  }

  deleteTodo(item) {
    const list = this.state.list.filter((i) => i !== item);
    const todoText = this.state.todoText;
    this.setState({list, todoText});
  }


  render () {
    return (
      <div className="container">
        <u><p>Welcome to My Todo App</p></u>
        <input type="text" value={this.state.todoText} onChange={e => this.updatedTodoText(e.target.value)}></input>
        <button className="add-todo" onClick={() => this.addTodoItem()}>Add Todo</button>
          <div>
            <ul>
              {
                this.state.list.map((item,index) => {
                  return (
                    <div>
                      <li key={index}>
                        {item}
                        <button className="delete-button" onClick={() => this.deleteTodo(item)}>Delete</button>
                        </li>                      
                    </div>
                  )
                })
              }
            </ul>
          </div>
      </div>
    )
  }

}
