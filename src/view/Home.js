
import Navbar from '../componentes/navbar/navbar';
import Slider from '../componentes/slider/slider';
import Texto from '../componentes/texto/texto';
import Cards from '../componentes/cards/cards';
import Footer from '../componentes/footer/footer';
import cars from '../componentes/img/cars.jpg';
import plantas from '../componentes/img/plantas.jpg';
import fornite from '../componentes/img/fornite.jpg';
import mario from '../componentes/img/mario.jpg';
import fifa from '../componentes/img/fifa.webp';
import GUERRA from '../componentes/img/GUERRA.webp';


 import React from 'react'
 
 const Home = () => {
   return (
     <>
     <Navbar/>
     <Slider
      className="d-block w-100"
      alt="First slide"/>
     <Texto/>
     <div className='tarjetas'>
       <Cards
         Imagen={cars}
         Title="Go cars"
         Text="El juego de carros mas increible en toda la historia"
         Buttons="Ver mas" />
       <Cards
         Imagen={plantas}
         Title="Plantas vs Zombies"
         Text="El juego mas divertido que pueda existir"
         Buttons="Ver mas" />
       <Cards
         Imagen={fornite}
         Title="Fornite"
         Text="El juego mas entretenido que puedas probar"
         Buttons="Ver mas" />
      </div>
      <div className='footer'>
         <Footer />
       </div></>
     
   )
 }
 
 export default Home
 