import React, { Component } from 'react';
{/* import styled from 'styled-components'; */}

import Header from '../components/Header.js';
import Breadcrumb from '../components/Breadcrumb.js';
import SearchArea from '../components/SearchArea.js';
import PrecioPromedio from '../components/PrecioPromedio.js';
import PlaneText from '../components/PlaneText.js';
import Ofertas from '../components/Ofertas.js';
import Footer from '../components/Footer.js';


import '../css/App.css';
import '../css/normalize.css';
import '../css/bootstrap.min.css';
import '../css/style.css';

/* Images */
import headerBg from '../images/vuelos-a-nueva-york.jpg';
import grafico from '../images/grafica.png';

class App extends Component {
  render() {
    return (
    <div>
    	<div id="wrapper" className="staticPage flights-to hotels-to newYork">
    		< Header />

         <main id="landscape">
            <div className="imagen-titulo"><img src={ headerBg } alt="Vuelos y Hoteles a Nueva York" title="Vuelos y Hoteles a Nueva York" /></div>
            <div className="container">
             	< Breadcrumb />
             	< SearchArea />
            </div>
         </main>
         
         < PrecioPromedio grafico={ grafico } />
         
         < PlaneText />
         
         < Ofertas />
         
         < Footer />
         
      </div>
      <script type="text/javascript" src="js/jquery-1.10.2.min.js?v=1.0.1"></script>
      <script type="text/javascript" src="js/jquery-ui.min.js?v=1.0"></script>
      {/* <!--[if (lte IE 9)]>
      <script type="text/javascript" src="js/mediaQueryPolyFill.js"></script>
      <script type="text/javascript" src="js/adapt.min.js"></script>
      <![endif]--> */}
     </div>
      

    );
  }
}

export default App;
