import React, { Component } from 'react';
import {Menu, Button} from 'semantic-ui-react';
import { Link, Router } from '../../routes';
let t = '';

class Header2 extends Component{

	logout = async (event) => {
		event.preventDefault();
		await window.torus.cleanUp();
		Router.pushRoute('/')
	}

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
						<Button basic color="black" onClick={this.logout}>
							Log Out
						</Button>
		
						<Link route={`/${window.account}/help`}>
							<a className="item">Help</a>
						</Link>
					</Menu.Menu>
				</Menu>
			);
		}
		
	}
}


export default Header2;
