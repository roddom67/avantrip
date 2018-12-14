import React, { Component } from 'react';
import PrecioPromedioTitulos from './PrecioPromedioTitulos.js';
import PreciosPromedioGrafico from './PreciosPromedioGrafico.js';

import styled from 'styled-components';

const preciosPromedio = [
	{
		mes: 'Abril',
		activo:false,
		desde: 15100,
		dias: [
			25265,25625,18652,17256,15210,15100,16254,22526,25265,25625,
			
			18652,17256,15210,15100,16254,22526,25265,25625,18652,17256,
			
			15210,15100,16254,22526,25265,25625,18652,17256,15210,15100
		]
	},
	{
		mes: 'Mayo',
		activo:false,
		desde: 16100,
		dias: [
			25265,25625,18652,17256,16210,16100,16254,22526,25265,25625,
			
			18652,17256,16210,16100,16254,22526,25265,25625,18652,17256,
			
			16210,16100,16254,22526,25265,25625,18652,17256,16210,16100,
			
			16254
		]		
	},
	{
		mes: 'Junio',
		activo:true,
		desde: 14500,
		dias: [
			25265,25625,18652,17256,16210,14500,16254,22526,25265,25625,
			
			18652,17256,16210,14500,16254,22526,25265,25625,18652,17256,
			
			16210,14500,16254,22526,25265,25625,18652,17256,15210,14500
		]		
	},
	{
		mes: 'Julio',
		activo:false,
		desde: 17800,
		dias: [
			25265,25625,20652,19256,18210,17800,18254,22526,25265,25625,
			
			20652,19256,18210,17800,18254,22526,25265,25625,20652,19256,
			
			18210,17800,16254,22526,25265,2562520652,19256,18210,17800,
			
			18254
		]		
	},
	{
		mes: 'Agosto',
		activo:false,
		desde: 17800,
		dias: [
			25265,25625,20652,19256,18210,17800,18254,22526,25265,25625,
			
			20652,19256,18210,17800,18254,22526,25265,25625,20652,19256,
			
			18210,17800,16254,22526,25265,2562520652,19256,18210,17800,
			
			18254
		]		
	}
]

const UlFlechasArea = styled.ul`
	display:flex;
	flex-wraper:nowrap;
	border-bottom:1px solid var(--light-gray);
`;

const LiFlechasArea = styled.li`
	width:40px;
`;

const LiPreciosPromecioContent = styled.li`
	width: calc( 100% - 40px * 2);
`;

class PrecioPromedio extends Component {

	constructor(props) {        
		super(props);
		
		this.state ={
			hover: false,
			mesActivo: 'Junio'
		}
		this.onToggleState = this.onToggleState.bind(this);
		
	}

	onToggleState(event) {
		event && event.preventDefault && event.preventDefault();
		this.setState({ 
			hover: !this.state.hover
		});
	}

  	render() {
  		
		var arrowStyle ={
			width:'40px',
			height:'40px',
			textAlign:'center',
			lineHeight:'40px',
			fontSize:'15px',
			display:'block',
			color:'var(--dark-gray)',
			cursor: 'pointer'
		}
		if(this.state.hover){
			arrowStyle = { 
				width:'40px',
				height:'40px',
				textAlign:'center',
				lineHeight:'40px',
				fontSize:'15px',
				display:'block',
				cursor: 'pointer',
				color: 'var(--blue)' 
			}
		}
    return (
         <section className="preciosPromedio">
         	<div className="container">
         		<div className="preciosPromedioArea">
         			<div className="fechasArea">
         				<UlFlechasArea>
         					<LiFlechasArea >
         						<a href="" 
         							title="Anterior" 
         							style={arrowStyle} 
         							onMouseOver={this.onToggleState} 
          							onMouseOut={this.onToggleState} 
          						><i class="fas fa-angle-left"></i></a>
         					</LiFlechasArea>
         					<LiPreciosPromecioContent>
         						<ul>
         							{preciosPromedio.map((precios, index) => (
										< PrecioPromedioTitulos 
											precios = { precios }
										/>
                  				))}
                  			</ul>
                  		</LiPreciosPromecioContent>
         					<LiFlechasArea >
         						<a href="" 
         							title="Siguiente" 
         							style={arrowStyle}
          							onMouseOver={this.onToggleState} 
          							onMouseOut={this.onToggleState} 
        						><i class="fas fa-angle-right"></i></a>
         					</LiFlechasArea>
         				</UlFlechasArea>
         			</div>
         			<div className="dataPrecios">
         				{ preciosPromedio.map((precios, index) => (
    							precios.mes == this.state.mesActivo ? 
         						<PreciosPromedioGrafico  
         							precios = {precios}
         						/>
          					:null
       					))}
        			</div>
         		</div>
         	</div>
         </section>

    );
  }
}

export default PrecioPromedio;
