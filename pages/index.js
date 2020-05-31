import React, { Component } from 'react';
import { Button, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import Layout from '../components/layouts/Layout';
import { Router } from './../routes';
import Web3 from 'web3';
import Matic from 'maticjs';
let t = ''



class Home extends Component {
	
	state = {
		isLoggedin: false,
		account: null,
    	balance: ''
	}
	async componentDidMount(){
		t = require('@toruslabs/torus-embed').default
		console.log(t)
	}

	handleSubmit = async e => {
		e.preventDefault();
		if(Notification.permission!=='denied'){
			Notification.requestPermission().then( async (permission)=>{
				if(permission==='granted'){
					try {
						const torus = new t({
						  buttonPosition: "bottom-left"
						});
						await torus.init({
						  buildEnv: "production",
						  enableLogging: true,
						  network: {
							host: "https://alpha.ethereum.matic.network/"
						  },
						  showTorusButton: true,
						  enabledVerifiers: {
							facebook: false,
							reddit: false,
							twitch: false,
							discord: false
						  }
						});
						await torus.login();
						const web3 = new Web3(torus.provider);
						const maticObj = new Matic({
						  maticProvider: web3.eth.currentProvider,
						  parentProvider: web3.eth.currentProvider,
						});
						let accounts = await web3.eth.getAccounts();
						window.maticObj = maticObj;
						window.torus = torus;
						window.web3 = web3;
						if (accounts[0]) {
						  this.state.isLoggedIn = true;
						}
						window.account=accounts[0];
						Router.pushRoute('/'+window.account)
					  } catch (error) {
						console.log("Error ", error);
					  }
				}
				else {
					alert("Application not accessible")
				}
				
			})
		}
		else{
			console.log("Wrong")
		}
	}

	render() {
		return (
			<div style={{ backgroundColor: 'black', height: '1000px' }}>
				<Layout>
					<div>
						<Header as="h1" icon textAlign="center">
							<Icon name="file code" circular style={{ color: 'white' }} />
							<Header.Content style={{ color: 'white' }}>EtherWills</Header.Content>
						</Header>
						<p
							style={{ fontSize: '2em', color: 'white', marginLeft: '12em', marginRight: '4em', marginTop: '4em' }}
							textAlign="center"
						>
							Please log in to create an EtherWill
						</p>
					</div>
					<div style={{ marginTop: '125px' }}>
						<Segment placeholder style={{ marginTop: 'auto', backgroundColor: 'black' }}>
							<Grid stackable textAlign="center">
								<Grid.Row verticalAlign="middle">
									<Grid.Column>
										<Header icon style={{ color: 'white' }}>
											<Icon name="hand point down" />
										</Header>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row verticalAlign="middle">
									<Grid.Column>
										<Button color="green" onClick={this.handleSubmit}>Log In</Button>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Segment>
					</div>
				</Layout>
			</div>
		);
	}
}

export default Home;
