import React, { Component } from 'react';

import geotrust from '../images/geotrust.jpg';
import trust from '../images/true.jpg';

class Footer extends Component {
  render() {
    return (
         <footer id="footer">
				<div className="telefonosArea">         	
         		<div className="container">
						<p>Asesorate por teléfono, llamanos al 0810-222-2848</p>
						<p>También podés comprar llamando al 0810-222-2826</p>
						<small>Lun a Vie de 8 a 20hs, Sáb y Dom de 9 a 15hs.</small>
         		</div>
         	</div>
         	<div className="legalesArea">
         		<div className="container">
         			<ul>
         				<li>
         					<small>2008 - 2017 Avantrip.com  Todos los derechos reservados</small>
         					<small>Avantrip.com SRL Legano Jro. 13969 - Disp. 299</small>
         					<small>Este es un sitio seguro. Utilizamos un almacenamiento encriptado para proteger su información personal.</small>
         				</li>
         				<li>
         					<ul>
         						<li>
         							<a href="#" title="Norton"><img src={ geotrust }  alt="Norton" title="Norton" /></a>
         						</li>
         						<li>
         							<a href="#" title="Norton"><img src= { trust } alt="Norton" title="Norton" /></a>
         						</li>
         					</ul>
         				</li>
         			</ul>
         		</div>
         	</div>
         </footer>

    );
  }
}

export default Footer;
