import React, { Component } from 'react';
import Layout from '../../components/layouts/Layout2';
import { Message, Button, Dimmer, Header, Icon, Form } from 'semantic-ui-react';
import ipfs from './../../ethereum/ipfs';
import { Link, Router } from '../../routes';
const { ethwill } = require('../EtherWills');
const bs58 = require('bs58');

class executeWill extends Component {
	static async getInitialProps(props) {
		return {
			willAddress: props.query.address,
		};
	}

	state = {
		code: '',
		permission: 'denied',
		pk: '',
		share: '',
		loading: true,
		executed: false,
		account:'',
		willDetail: false
	};

	async componentDidMount(){
		let etherwill = await ethwill(this.props.willAddress);
		const executable = await etherwill.methods.checkExecutable().call({ from: window.account });
		let executed = await etherwill.methods.executed().call({from: window.account})
		this.setState({
			executed: executed,
			account: window.account,
			checkExecutable: executable,
			loading: false
		});
	}



	onSubmit = async (event) => {
		event.preventDefault();
		let etherwill = await ethwill(this.props.willAddress);
		await etherwill.methods.executeWill(this.state.code).send({ from: this.state.account });
		let willDetails = await etherwill.methods.WillDetails().call({ from: this.state.account });
		const hashHex = "1220" + willDetails[0].slice(2)
  		const hashBytes = Buffer.from(hashHex, 'hex');
		const pk_base58 = bs58.encode(hashBytes)
		const hashHex1 = "1220" + willDetails[1].slice(2)
  		const hashBytes1 = Buffer.from(hashHex1, 'hex');
		const s_base58 = bs58.encode(hashBytes1)
		const pk_json = await ipfs.cat(pk_base58)
		const s = await ipfs.cat(s_base58)
		let pk = window.web3.eth.accounts.decrypt(JSON.parse(pk_json.toString()),s.toString())
		this.setState({ active: true });
		this.setState({
			pk: pk.privateKey.slice(2),
			share: willDetails[2],
			willDetail: true
		})
	};

	onClick = async (event) => {
		event.preventDefault()
		let etherwill = await ethwill(this.props.willAddress);
		let willDetails = await etherwill.methods.WillDetails().call({ from: this.state.account });
		console.log("L")
		const hashHex = "1220" + willDetails[0].slice(2)
  		const hashBytes = Buffer.from(hashHex, 'hex');
		const pk_base58 = bs58.encode(hashBytes)
		const hashHex1 = "1220" + willDetails[1].slice(2)
  		const hashBytes1 = Buffer.from(hashHex1, 'hex');
		const s_base58 = bs58.encode(hashBytes1)
		const pk_json = await ipfs.cat(pk_base58)
		const s = await ipfs.cat(s_base58)
		console.log("K")
		let pk = window.web3.eth.accounts.decrypt(JSON.parse(pk_json.toString()),s.toString())
		console.log(pk.privateKey.slice(2))
		this.setState({
			pk: pk.privateKey.slice(2),
			share: willDetails[2],
			willDetail: true
		})
	}

	WillDetail () {
		if(this.state.willDetail===true){
			return(
				<Message positive style = {{marginTop: '15px'}}>
					<Message.Header>Private Key: {this.state.pk}</Message.Header>
					<Message.Header>Your Share In The Will: {this.state.share}</Message.Header>
			 	</Message>
			)
		}
	}


	Back = async event => {
		event.preventDefault()
		Router.pushRoute('/'+this.state.account+'/role')
	}
	render() {
		if(this.state.loading===false){
			if (this.state.checkExecutable === false) {
				return (
					<div style={{ backgroundColor: 'black', height: '1000px' }}>
						<Layout>
							<Message info>
								<Message.Header>Will not yet executable, please go back</Message.Header>
							</Message>
							<Button primary type="button" onClick={this.Back}>
								Back
							</Button>
						</Layout>
					</div>
				);
			} else {
				if(this.state.executed===false){
					return (
						<div style={{ backgroundColor: 'black', height: '1000px' }}>
							<Layout>
								<h2
									className="ui icon center aligned header"
									style={{ color: 'white', marginBottom: '30px', marginTop: '30px' }}
								>
									<i aria-hidden="true" class="file code icon" style={{ color: 'white' }} />
									Will Execution
								</h2>
								<Message positive>
									<Message.Header>Code for will:</Message.Header>
									<p>
										<b>{this.props.willAddress}</b> for execution.
									</p>
								</Message>
								<Form onSubmit={this.onSubmit}>
									<Form.Field>
										<input
											value={this.state.code}
											onChange={(event) => this.setState({ code: event.target.value })}
										/>
									</Form.Field>
									<Button positive type="submit" value="Submit" content="Show">
										Execute Will
									</Button>
									<Button primary type="button" onClick={this.Back}>
										Back
									</Button>
									<div>{this.WillDetail()}</div>
								</Form>
							</Layout>
						</div>
					);
				}
				else{
					return(
						<div style={{ backgroundColor: 'black', height: '1000px' }}>
							<Layout>
								<div>
									<Button positive type="button" onClick= {this.onClick} content="Show">
										Will Details
									</Button>
									<Button primary type="button" onClick={this.Back}>
										Back
									</Button>
								</div>
								<div>{this.WillDetail()}</div>
							</Layout>
						</div>
					);


				}

			}
		}
		else{
			return (
				<div style={{ backgroundColor: 'black', height: '1000px' }}>
					<Layout>
						<div>
							<Header as="h1" icon textAlign="center">
								<Header.Content style={{ color: 'white' }}>LOADING..</Header.Content>
							</Header>
						</div>
					</Layout>
				</div>
			);
		}

	}
}

export default executeWill;
