import React, { Component } from 'react';
import styled from 'styled-components';

const Li = styled.li`
	width:20%;
	text-align:center;
	display:flex;
	flex-wrap:nowrap;
	flex-direction:column;
	
	@media(max-width: 575px){
		width:100%;
	}
	
`;
const h4Style = {
	fontSize: '15px',
	fontWeight:'600',
	color:'var(--dark-gray)',
	paddingTop:'3px'
}
const smallStyle = {
	display:'block',
	color: 'var(--dark-gray)',
	fontSize: '11px'
}

class PreciosPromecioGrafico extends Component {

  render() {

    return (
		<Li className={this.props.precios.activo?'active':null}>
			<a href="#" title="" className={this.props.precios.activo?'active':null} >
				<h4 style={h4Style}>{ this.props.precios.mes }</h4>
				<small style={smallStyle}>desde AR$ { this.props.precios.desde }</small>
			</a>
		</Li>

    );
  }
}

export default PreciosPromecioGrafico;
