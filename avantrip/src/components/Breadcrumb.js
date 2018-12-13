import React, { Component } from 'react';

class Breadcrumb extends Component {
  render() {
    return (
         <aside className="breadcrumb">
				<ul>
					<li><a href="/" title="Home"><span>Home</span></a></li>
					<li><a href="/destinos.html" title="Destinos"><span>Destinos</span></a></li>
					<li><a href="/destinos/estados-unidos.html" title="Estados Unidos"><span>Estados Unidos</span></a></li>
					<li><a href="/destinos/estados-unidos/nueva-york.html" title="Nueva York"><strong>Nueva York</strong></a></li>
				</ul>
			</aside>

    );
  }
}

export default Breadcrumb;
