import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(<App />, document.getElementById("root"));
//1.PARAMETAR(ELEMENT) ne sme da sadrzi vise od JEDNE KOMPONENTE(NE SME I P I H..., TO SVE TREBA DA SE SPAKUJE NPR U DIV)  
//RENDER METODA PRIMA DVA PARAMETRA-

//1.ELEMENT KOJI SE UMEĆE u prosledjeni html container, napisan je u jsx-u.
//2. drugi parametar render metode je html element doucment to je index.html - div sa id-em root i tu ubacujemo App kompoenentu
