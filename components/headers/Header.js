import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';
import { Link } from '../../routes';

class Header extends Component{
	render(){
		const divStyle = {
			fontSize: '1.7em'
		  };
		if(this.props.a==='h'){
			return(
				<div>
					<p>Hello</p>
				</div>
			);
		}
		else{
			return (
				<Menu style={{ marginTop: '0px' }}>
					<Link route="/">
						<a className="item" style={divStyle}><i className = "file code icon"></i>EtherWill</a>
					</Link>
		
					<Menu.Menu position="right">
						<Link route="/help">
							<a className="item">Help</a>
						</Link>
					</Menu.Menu>
				</Menu>
			);
		}
		
	}
}


export default Header;
