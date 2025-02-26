import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import style from "./Contato.module.css";

function Contato ()  {
  return  (

   <>
       <Header/>

           <main>

                <form action= "" method="post">
                  <label htmlFor="">Esse é meu formulario de contato</label>
                  <imput type="email" nome = "" id ></imput>

                </form>
          </main>

     <Footer/>

    </>
  );
  }

export default Contato;
