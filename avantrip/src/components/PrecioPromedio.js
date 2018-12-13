import React, { Component } from 'react';

class PrecioPromedio extends Component {

  render() {
    return (
         <section className="preciosPromedio">
         	<div className="container">
         		<div className="preciosPromedioArea">
         			<img src={ this.props.grafico } alt="Grafica" title="Grafica" />
         			{/* <!--div className="fechasArea">
         				<ul>
         					<li>
         						flecha
         					</li>
         					<li>
         						<h4>Abril</h4>
         						<small>desde AR$ 15.100</small>
         					</li>
         				</ul>
         			</div>
         			<div className="dataPrecios">
         				Grafico
         			</div--> */}
         		</div>
         	</div>
         </section>

    );
  }
}

export default PrecioPromedio;
