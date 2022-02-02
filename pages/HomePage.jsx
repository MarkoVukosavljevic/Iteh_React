import React, {Component, useState} from 'react';
import Todos from '../components/Todos';
import AddItem from '../components/AddItem';
class HomePage extends Component {
  
  render (){
   
    const addTodo = (text, isComplited) => {
      const newTodos = [...this.props.todos, { text, isComplited}];
      this.props.setTodos(newTodos);
    }
    return (
      <>
        <Todos todos={this.props.todos} setTodos={this.props.setTodos}/> 
        <AddItem addTodo={addTodo} />
      </>    
    )    
  };
}

export default HomePage;