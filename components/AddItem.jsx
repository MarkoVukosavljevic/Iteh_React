import React, {useState} from 'react';

function AddItem({ addTodo }) {
    const [value, setValue] = useState("");//value je string koji je prazan useState( "" )
  
    const handleSubmit = e => { //parametar e je sve sto je primljeno sa te forme
      e.preventDefault(); // da se spreci slanje podataka ka html stranici

      console.log(value);
      if (!value) return;//ako nije vrednost input polja za add new item prazna samo ce da se prekine program, kada dole onsubmit kliknemo enter to je dogadjaj
      addTodo(value, false);// pozivamo metodu addTodo sa textualnim paremtrom value i isCoplited je false
      setValue("");//ovo znaci kada klknem enter da bude prazno input polje za add new item
    };
  //onsubmit (pritisnemo enter )je dogadjaj i poziva se handleSubmit
    return (
      <form onSubmit={handleSubmit}> 
        <span>Add new item</span>
        <input
          type="text" //tipa je tekst
          className="input todo"
          value={value} // value je vrednost text polja
          onChange={e => setValue(e.target.value)}// ja iz e ucitavam vrednost unetu i menjam value prazni "" na neku vrednost
        />
      </form>
    );
  }

export default AddItem;
  