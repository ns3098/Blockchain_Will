import React, { Component } from 'react';
import { Form, Button, Message, Icon } from 'semantic-ui-react';
import Layout from '../../components/layouts/Layout2';
import ipfs from './../../ethereum/ipfs';
import { Router } from '../../routes';
const { wills } = require('./../wills');
const bs58 = require('bs58');

class WillNew extends Component {
	state = {
		privateKey: '',
		stringSecretKey: '',
		division: [ { beneficiary: '', share: '' } ],
		checkInTime: '',
		errorMessage: '',
		account: '',
		loading: false
	};

	async componentDidMount() {
		this.setState({ account: window.account });
	}

	onSubmit = async (event) => {
		event.preventDefault();
		this.setState({loading: true})
		if(Notification.permission!=='denied'){
			Notification.requestPermission().then( async (permission)=>{
				if(permission==='granted'){
					this.setState({ loading: true, errorMessage: '' });
					let will = await wills();
					let b = [];
					let s = [];
					let division = this.state.division;
					for (let i = 0; i < this.state.division.length; i++) {
						console.log(this.state.division[i]);
						let publicAddress = await window.torus.getPublicAddress({
							verifier: "google",
  							verifierId: division[i].beneficiary
						});
						console.log(publicAddress);
						b.push(publicAddress);
						s.push(division[i].share);
					}
					const pk = window.web3.eth.accounts.encrypt(this.state.privateKey, this.state.stringSecretKey);
					const pk_json = JSON.stringify(pk);
					const pk_bs58 = await ipfs.add(Buffer.from(pk_json));
					const s_bs58 = await ipfs.add(Buffer.from(this.state.stringSecretKey));
					const pk_bytes = bs58.decode(pk_bs58[0].hash);
					const s_bytes = bs58.decode(s_bs58[0].hash);
					const pk_hash = '0x' + pk_bytes.slice(2).toString('hex');
					const s_hash = '0x' + s_bytes.slice(2).toString('hex');
					try {
						await will.methods.WillCreation(b, s, pk_hash, s_hash, this.state.checkInTime).send({
							from: this.state.account
						});
						
					} catch (err) {
						this.setState({ errorMessage: err.message });
					}

					this.setState({ loading: false });
					Router.pushRoute('/'+window.account)
				}
				else{
					alert("Application not accessible")
				}
			})
		}
		
	};

	addDivision = async (event) => {
		event.preventDefault();
		this.setState((prevState) => ({
			division: [ ...prevState.division, { beneficiary: '', share: '' } ]
		}));
	};

	handleRemoveBeneficiary(idx) {
		let someArray = this.state.division;
		someArray.splice(idx, 1);
		this.setState({ division: someArray });
	}

	Back = async event => {
		event.preventDefault()
		Router.pushRoute('/'+this.state.account) 
	}

	render() {
		return (
			<div style={{ backgroundColor: 'black', height: '1500px' }}>
				<Layout>
					<div style={{ marginTop: '20px' }}>
						<h2 className="ui icon center aligned header" style={{ color: 'white' }}>
							<i aria-hidden="true" class="file code icon" style={{ color: 'white' }} />
							Create A New Will Here
						</h2>
					</div>
					<Button primary type="button" onClick={this.Back} style = {{marginTop: '30px',marginBottom: '15px'}}>
							Back
					</Button>
					<div className="ui container">
						<h3 className="ui dividing header" style={{ color: 'white', fontSize: '1.5em' }}>
							Testor Infomation
						</h3>
						
						<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
							<Form.Field>
								<label style={{ color: 'white', fontSize: '1.2em' }}>Private Key</label>
								<input
									type="password"
									value={this.state.privateKey}
									onChange={(event) => this.setState({ privateKey: event.target.value })}
								/>
							</Form.Field>
							<h3 className="ui dividing header" style={{ color: 'white', fontSize: '1.5em' }}>
								Information For The Hashing Of Your Private Key
							</h3>
							<Form.Field>
								<label style={{ color: 'white', fontSize: '1.2em' }}>Secret Key</label>
								<input
									value={this.state.stringSecretKey}
									onChange={(event) => this.setState({ stringSecretKey: event.target.value })}
								/>
							</Form.Field>
							<h3 className="ui dividing header" style={{ color: 'white', fontSize: '1.5em' }}>
								Beneficiary Information
							</h3>

							{this.state.division.map((val, idx) => {
								let beneficiaryId = `beneficiary-${idx}`,
									shareId = `share-${idx}`;
								return (
									<div key={idx}>
										<div style={{ marginTop: '15px' }}>
											<Form.Field>
												<label
													htmlFor={beneficiaryId}
													style={{ color: 'white', fontSize: '1.2em' }}
												>{`Google email address for Beneficiary #${idx + 1}`}</label>
												<input
													type="text"
													name={beneficiaryId}
													data-id={idx}
													id={beneficiaryId}
													value={this.state.division[idx].beneficiary}
													onChange={(e) => {
														let division = [ ...this.state.division ];
														division[e.target.dataset.id][e.target.className] =
															e.target.value;
														this.setState({ division });
													}}
													className="beneficiary"
												/>
											</Form.Field>
										</div>
										<div style={{ marginTop: '15px' }}>
											<Form.Field>
												<label htmlFor={shareId} style={{ color: 'white', fontSize: '1.2em' }}>
													{`Percentage to be given to Beneficiary #${idx + 1}`}
												</label>
												<input
													type="number"
													name={shareId}
													data-id={idx}
													id={shareId}
													value={this.state.division[idx].share}
													onChange={(e) => {
														let division = [ ...this.state.division ];
														division[e.target.dataset.id][e.target.className] =
															e.target.value;
														this.setState({ division });
													}}
													className="share"
												/>
											</Form.Field>
										</div>
									</div>
								);
							})}
							<div style={{ marginTop: '15px' }}>
								<Button icon labelPosition="right" onClick={this.addDivision}>
									<Icon name="plus" />
									Beneficiary
								</Button>
								<Button
									icon
									labelPosition="right"
									onClick={() => {
										this.state.division.map((val, idx) => {
											this.handleRemoveBeneficiary(idx);
										});
									}}
								>
									<Icon name="minus" />
									Beneficiary
								</Button>
							</div>
							<h3 className="ui dividing header" style={{ color: 'white', fontSize: '1.5em' }}>
								Ping Information
							</h3>
							<Form.Field>
								<label style={{ color: 'white', fontSize: '1.2em' }}>Periodic CheckIn (In minutes)</label>
								<input
									type="number"
									value={this.state.checkInTime}
									onChange={(event) => this.setState({ checkInTime: event.target.value })}
								/>
							</Form.Field>
							<Message error header="Oops!" content={this.state.errorMessage} />
							<Button primary type="submit" value="Submit" loading={this.state.loading}>
								Create Will
							</Button>
						</Form>
					</div>
				</Layout>
			</div>
		);
	}
}

export default WillNew;
