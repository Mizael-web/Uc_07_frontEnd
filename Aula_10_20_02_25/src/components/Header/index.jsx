import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (

<header className = {style.header}>
    <h1>Senac Sala de Aula </h1>
    <nav>
        <ul>
            <li>
                <li>
                 <a href="/Home">Home</a>
                </li>

                <li>
                <a href="/sobre">Sombre</a>
                </li>

               <li>
               <a href="/contato">Contato</a>
               </li>
            </li>
        
        </ul>        
    </nav>
</header>

  );

}

export default Header; 