import React, { Component } from 'react';


class OfertaBox extends Component {

  	render() {
  		let stars = [];
		for ( let i = 0; i < this.props.oferta.stars; i++){
			stars.push(<i className="fas fa-star" ></i>)
		}

    	return (
			<li className="col-xs-12 col-sm-6 col-md-3" key={ this.props.index }>
				<a href="#" >
					<div>
						<span className="spanImg">
							<img src={ require('../images/' + this.props.oferta.imagen ) } alt="Hampton Inn Manhattan" title="Hampton Inn Manhattan" />
						</span>
						<div className="textAreaOferta">
							<p>{ this.props.oferta.titulo }</p>
							<h2>{ this.props.oferta.hotel }</h2>
							<span className="stars">{ stars }</span>
							<div className="priceArea">
								<small>Desde</small>
								<p>{ this.props.oferta.price }</p>
								<small className="before">Antes <span>{ this.props.oferta.beforePrice }</span></small>
							</div>
							<small>Habitación por noche</small>
							<h5>Ver Hotel</h5>
						</div>
					</div>
				</a>
			</li>
    	);
  	}
}

export default OfertaBox;
