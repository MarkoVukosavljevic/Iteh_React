import React from 'react';

function Todo({ todo ,index, deleteItem, completeItem}) {
    return (
      <div className="todo">
        <div>
            <span>{todo.text}</span> 
        </div>
        <div className='todo-controls'>
          {!todo.isComplited ?
            <button className='btn btn-info todo-control' onClick={ () => completeItem(index)}>
              <i className="fa fa-check" aria-hidden="true" />
            </button>
            :
            <button className='btn btn-success todo-control' disabled>
              <i className="fa fa-check-circle" aria-hidden="true" />
            </button> 
          }
          <button className='btn btn-danger todo-control' onClick={() => deleteItem(index)}>
              <i className="fa fa-trash-o" aria-hidden="true" />
          </button>
        </div>
        
      </div>
    );
};
export default Todo;