import React from 'react';
import Todo from '../components/Todo';

function Todos({todos, setTodos})
{
    const completeItem = index => {
      const newTodos = [...todos];      
      newTodos[index] = { ...newTodos[index] };
      newTodos[index].isComplited = true;
      setTodos(newTodos);
   
    };
    const deleteItem = index => 
    {
        const newTodos = todos.filter((item,i ) => i !== index);
        setTodos(newTodos);
    };
// item je todo iz liste todos a i je indeks na kome se on nalazi


   
    return (

    <div className="todo-list">
      <h3 className='center'>Todo list</h3>
      {todos && !!todos.length && todos.map((todo, index) => ( // map je funkcije za prikazivanje svih elemenata iz nekog niza
        <Todo
          key={index}
          index={index}
          todo={todo}
          deleteItem = {deleteItem}
          completeItem = {completeItem}
        />
      ))}

      
    </div>
    );
}

export default Todos;