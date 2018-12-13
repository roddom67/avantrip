import React, { Component } from 'react';

/* Images */
import avantripLogo from '../images/avantrip.png';

class Header extends Component {
  render() {
    return (
         <header id="header">
         	<div className="container">
         		<nav>
         			<ul>
         				<li className="menuArea">
         					<span className="empresaArea">
         						<a href="/" title="Avantrip"><img src={ avantripLogo } alt="Avantrip" title="Avantrip" /></a>
         					</span>
         					<ul>
         						<li>
         							<a href="#" title="Vuelos" className="active">Vuelos</a>
         						</li>
         						<li>
         							<a href="#" title="Hoteles">Hoteles</a>
         						</li>
         						<li>
         							<a href="#" title="Paquetes">Paquetes</a>
         						</li>
         						<li>
         							<a href="#" title="Autos">Autos</a>
         						</li>
         						<li className="mas">
         							<a href="#" title="más">más<i className="fas fa-angle-down"></i></a>
         							<ul>
         								<li>
         									<a href="#" title="Cruceros">Cruceros</a>
         								</li>
         								<li>
         									<a href="#" title="Disney">Disney</a>
         								</li>
         							</ul>
         						</li>
         					</ul>
         				</li>
         				<li className="usuarioArea">
         					<p>Bienvenido, <strong>Alejandro Altamirano</strong><a href="" title="Usuario"><i className="fas fa-angle-down"></i></a></p>
         					<ul>
         						<li>
         							<a href="#" title="Mi cuenta">Mi cuenta</a>
         						</li>
         						<li>
         							<a href="#" title="Log out">Log Out</a>
         						</li>
         					</ul>
         				</li>
         			</ul>
         		</nav>
         	</div>
         </header>

    );
  }
}

export default Header;
