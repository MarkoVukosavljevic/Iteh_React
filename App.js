import React, {useState} from 'react';
import { Route, Link, Routes, BrowserRouter, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutusPage from './pages/AboutusPage'
import logo from './logo.svg';
import { Navbar, Container, Row, Col} from 'react-bootstrap';

import './App.css';

function App() {

 const [todos, setTodos] = useState([]);
 ///pre returna se definisu const,let,funkcije i one se koriste u return


 //Route predstavljaju stranice na sajtu i one se nalaze unutar BroowserRouter-a
    //deo unutar Navbara se izvrsava za OBE stranice
    //za prvu rutu kada se pojavi samo / pravimo komponentu koja predstavlja tablu za x o GamePage
    
    //clasname="link" predstavlja linkove koji se nalaze gore u cosku za svaku stranicu
    //RETURN PREDSTAVLJA ONO STO SE PRIKAZUJE NA HTML STRANICI
    //NAVBAR JE KOMPONENTA KOJU SMO PREUZELI IZ REACT BOOTSTRAP NISMO JE SAMI PRAVILI
    //BROWSERROUTER,ROUTS,ROUT,NAVLINK smo importovali iz react-router-dom
    //BROWSERROUTER-OMOTAC-SVE RUTE MORAJU BITI U OKVIRU BROWSERROUTER-A
    //ROUTES-JE KAO SWITCH, ROUTE JE KAO CASE
    //routes je komponenta koja obavija rute
    //<Route path="putanja" element={sta se prikazuje na toj putanji}
    //NavLink koristimo umesto link taga <a...>
    //to koristimo umesto href="putanja" => <NavLink exact to="/"> u react ISTO KAO <a href="/" u htmlu>

  return ( // u returnu mora uvek 1 komponeneta da bude pa smo omotali browserrouter
    <BrowserRouter >
  
        <div className="app">
          <Navbar >
          <div className='cont'>              
            <NavLink exact to="/" className="nav_link"  activeClassName='is-active'>
                <i className="fa fa-home"></i> <span>Home</span>
            </NavLink>
            
            <NavLink to="/aboutus" className="nav_link" activeClassName='is-active' >
                <i className="fa fa-user"></i> <span>About us</span>
            </NavLink>          
              
          </div>
          </Navbar>
          
          <Routes> 
              <Route exact path="/" element={<HomePage todos = {todos} setTodos = {setTodos} />} /> 
              <Route exact path="/aboutus" element={<AboutusPage />} />
             
          </Routes>
        </div>
      
    </ BrowserRouter >
  );
}

export default App;