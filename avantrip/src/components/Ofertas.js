import React, { Component } from 'react';
import OfertaBox from './OfertaBox.js';

const ofertas = [
	{
		titulo:'Hotel en Nueva York',
		imagen:'137190a_hb_r_001.jpg',
		hotel: 'Hampton Inn Manhattan',
		stars: 4,
		price: 'AR$ 5.961',
		beforePrice: 'AR$ 13.247'
	},
	{
		titulo:'Hotel en Nueva York',
		imagen:'013442a_hb_a_050.jpg',
		hotel: 'Yotel',
		stars: 4,
		price: 'AR$ 4.854',
		beforePrice: 'AR$ 7.526'
	},
	{
		titulo:'Hotel en Nueva York',
		imagen:'013445a_hb_a_072.jpg',
		hotel: 'Wyndham New York',
		stars: 4,
		price: 'AR$ 4.605',
		beforePrice: 'AR$ 8.365'
	},
	{
		titulo:'Hotel en Nueva York',
		imagen:'050017a_hb_a_010.jpg',
		hotel: 'Stewart Hotel',
		stars: 3,
		price: 'AR$ 5.526',
		beforePrice: 'AR$ 9.365'
	}
]

class Ofertas extends Component {
  render() {
    return (
         <section className="ofertasLanding" id="landingPage">
            <div className="container offerContent">
               <h2>Hoteles en Nueva York</h2>
               <div id="destacadas" className="ofertasContent">
                  <ul className="offers ofertaData row">
                  	{ofertas.map((oferta, index) => (
                  		< OfertaBox 
                  			oferta = { oferta }
                  		/>
                  	))}
                  </ul>
               </div>
            </div>
         </section>

    );
  }
}

export default Ofertas;
