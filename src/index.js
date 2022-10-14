import React from "react";
import ReactDOM from "react-dom/client";
import { Saludar, UserPlayer } from "./Saludar";
import Product,{Navbar} from "./Product";
import { Button } from "./Button"
//const rootElement = document.getElementById('root')
//reactDOM.createRoot(rootElement);

// Seleccionamos mediante el doom el div con id="root" y se lo pasamos al metodo createRoot. Esto lo guardamos en una constante root.
// root recibe es una aplicación inicial de react (El elemento root)
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
root.render(
<div>
    { Saludar() }
    { Saludar() }
    { Saludar() }
</div>
)
En ves de renderizar la funcion con llaves la podemos llamar como una etiqueta hmtl */

root.render(
  <>
    <Saludar title="holi" user="juancho" />
    <Saludar title="holi React" />
    <Saludar title="hola JSX" />
    <Button title="Enviar" />
    <Button title="" name="Adela"/>
    {/* <Saludar proxy={3322}/> */}
  </>
);
