import React, { Component } from 'react';
import Varios from "../utils/varios.js";

import styled from 'styled-components';


const PreciosPromedioArea = styled.div`
	padding: 40px 20px 10px;
`;
const PrecioGraficoArea = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: nowrap;
	@media(max-width: 575px){
		flex-direction:column;
	}
`

const PrecioDesde = styled.li`
	width: 90px;
	position: relative;
	@media(max-width: 575px){
		width:100%;
	}
`

const PrecioGraficoData = styled.ul`
	width:100%;
	display:flex;
	flex-wrap:nowrap;
	justify-content:space-around;
	align-items:flex-end;
	margin-bottom:50px;
	border-bottom:1px solid #efefef;
	border-top:1px solid #efefef;
	padding:0 20px
	height: 110p;
	@media(max-width: 575px){
		flex-direction:column;
		align-items: flex-start;
		padding:20px 0;
		border:none;
		border-left:1px solid #efefef;
		border-right:1px solid #efefef;
		margin-bottom:20px;
	}
`


const diasSemana = [ 'Lun','Mar','Mie','Jue','Vie','Sáb','Dom']

class PrecioPromedioTitulos extends Component {

  render() {
	var desdeLine = ( this.props.precios.desde * 110 / 30000) + 'px' ;
	var desdeLineMob = ( this.props.precios.desde * 300 / 30000) + 'px' ;
	
	var desdeStyle = {
		position: 'absolute',
		left: '0',
		width: '100%',
		height: '1px',
		background: 'var(--green)',
		opacity: '.5',
		bottom: desdeLine 
	};
	
	var precioDesdeTxt = {
		background: 'var(--green)',
		display: 'block',
		color:'var(--white)',
		padding:'5px',
		fontSize: '11px',
		textAlign: 'center',
		transform: 'translate(0,50%)',
		position:'absolute',
		width: '100%',
		left: '0',
		bottom: desdeLine
	}
	var desdeStyleMob = {
		position: 'absolute',
		top: '0',
		height: '100%',
		width: '1px',
		background: 'var(--green)',
		opacity: '.5',
		left: desdeLineMob 
	};
	var precioDesdeTxtMob = {
		background: 'var(--green)',
		display: 'block',
		color:'var(--white)',
		padding:'5px',
		fontSize: '11px',
		textAlign: 'center',
		position:'relative',
		width: '100%',
	}
	
	
	
	return (
			<PreciosPromedioArea>
			{Varios().isMobile() ?
				<PrecioGraficoArea>
					<PrecioDesde>
						<div style={{ position:'relative'}}>
							<div style={precioDesdeTxtMob}>
								AR$ { this.props.precios.desde}
							</div>
						</div>
					</PrecioDesde>
					<li className="precioGrafico">
						<div>
							<PrecioGraficoData>
							{this.props.precios.dias.map((dia, index)=>(
								<li className={dia==this.props.precios.desde?'desdeMark':null}>
									<span style={{ width: ( 300 * dia / 30000) + 'px' }} >{dia}</span>
									<small>{ diasSemana[ index % 7 ]} {index + 1} </small>
								</li>
							))}
							</PrecioGraficoData>
							<span className="lineas linea1"></span>
							<span className="lineas linea2"></span>
							<span className="lineas linea3"></span>
							<span className="lineas linea4"></span>
							<span style={desdeStyleMob}></span>
						</div>
						<small>Tarifa por adulto para una estadía de 14 días.<br />Los precios visualizados son los mejores encontrados por los usuarios en los últimos días y podrían no estar actualizados.</small>
					</li>
				</PrecioGraficoArea>
			:
				<PrecioGraficoArea>
					<PrecioDesde>
						<div style={{ height:'110px', position:'relative'}}>
							<div style={precioDesdeTxt}>
								AR$ { this.props.precios.desde}
							</div>
						</div>
					</PrecioDesde>
					<li className="precioGrafico">
						<div>
							<PrecioGraficoData>
							{this.props.precios.dias.map((dia, index)=>(
								<li className={dia==this.props.precios.desde?'desdeMark':null}>
									<span style={{ height: (110 * dia / 30000) + 'px' }} >{dia}</span>
									<small>{ diasSemana[ index % 7 ]} {index + 1} </small>
								</li>
							))}
							</PrecioGraficoData>
							<span className="lineas linea1"></span>
							<span className="lineas linea2"></span>
							<span className="lineas linea3"></span>
							<span className="lineas linea4"></span>
							<span style={desdeStyle}></span>
						</div>
						<small>Tarifa por adulto para una estadía de 14 días.<br />Los precios visualizados son los mejores encontrados por los usuarios en los últimos días y podrían no estar actualizados.</small>
					</li>
				</PrecioGraficoArea>
			}
			</ PreciosPromedioArea>
    );
  }
}

export default PrecioPromedioTitulos;
