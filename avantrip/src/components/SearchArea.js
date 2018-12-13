import React, { Component } from 'react';

const inputStyle = {
	border: 'none',
	fontSize: '16px',
	width: '100%'
}

class SearchArea extends Component {

  render() {
    return (
         <section className="contentLandscape">
				<header className="info">
					<h1 className="txtHidden">Vuelos y Hoteles a Nueva York</h1>
					<h2><span>Escapate a</span> Nueva York</h2>
				</header>
				<section className="search">
					<article id="flight" className="active">
						<h3><span className="hidden">Buscar</span>Vuelos</h3>
						<form action="" className="goBack">
							<fieldset>
								<ul className="flightType">
									<li><input style={inputStyle} type="radio" id="goBack" name="typeFlight" value="Return" checked="checked"/> <label for="goBack">Ida y Vuelta</label></li>
									<li><input style={inputStyle} type="radio" id="go" name="typeFlight" value="OneWay"/> <label for="go">Solo ida</label></li>
									<li><input style={inputStyle} type="radio" id="multi" name="typeFlight" value="Other"/> <label for="multi">Multidestino</label></li>
									<li><input style={inputStyle} name="rest" type="hidden" id="rest" value="true"/></li>
								</ul>
							</fieldset>
							<fieldset className="destinyWrapper">
								<ul className="">
									<li className="destinyArea">
										<ul>
											<li>
												<label for="origenText">Origen</label> 
												<input name="origenText" id="origenText" type="text" className="autoCompleteFlag originPlace" value="Buenos Aires (EZE)"/> 
											</li>
											<li>
												<label for="destinoText">Destino</label> 
												<input id="destinoText" name="destinoText" type="text" className="autoCompleteFlag destinyPlace" value="Nueva York (JFK)" readonly="readonly"/> 
											</li>
											<li>
												<label for="fechaIda">Fechas</label> 
												<input className="datePickerFlag originDate" type="text" value="Mar 28 Oct - Vie 31 Nov"/> 
											</li>
											<li>
												<label for="pasajeros" className="passengers">Pasajeros y Clase</label> 
												<input type="text" className="pasajeros" id="pasajeros" value="2 Pasajeros, Económica"/> 
											</li>
										</ul>
									</li>
									<li className="submitArea">
										<input name="categoryGA" value="vuelos" type="hidden"/> 
										<button type="submit" name="btnResultadoBusqueda" id="btnResultadoBusqueda" ><i className="fas fa-search"></i></button>
								</li>
								</ul>
							</fieldset>
						</form>
					</article>
				</section>
			</section>

    );
  }
}

export default SearchArea;
