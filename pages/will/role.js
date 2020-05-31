import React, { Component } from 'react';
import Layout from '../../components/layouts/Layout2';
import { Button, Item, Table, Header } from 'semantic-ui-react';
const { ethwill } = require('../EtherWills');
const { wills } = require('../wills');
import { Link, Router } from '../../routes';

class YourRole extends Component {
	state = {
		willAddress: '',
		addressBenefArray: [],
		loading: true
	};
	async componentDidMount() {
		const will = await wills();

		const willAddress = await will.methods.getTestor(window.account).call({ from: window.account });
		const beneficiary_contracts = await will.methods.numberOfWillsAsBeneficiary().call({ from: window.account });

		let addressBenefArray = [];
		let willAddressAsBenef;
		for (let i = 0; i < beneficiary_contracts; i++) {
			willAddressAsBenef = await will.methods.getBeneficiary(window.account, i).call({ from: window.account });
			let has_selfdestructed = await will.methods.getWillExistence(willAddressAsBenef).call({ from: window.account });
			if(has_selfdestructed===false){
				addressBenefArray.push(willAddressAsBenef);
			}	
		}
		console.log(addressBenefArray);
		this.setState({ willAddress });
		this.setState({ addressBenefArray });
		this.setState({ loading: false })
	}
	submit = async (event) => {
		event.preventDefault();
		let address = event.target.value
		const etherwill = await ethwill(address);
		let bool = await etherwill.methods.checkExecutable().call({ from: window.account });
		if (bool == true) {
			let code = await etherwill.methods.getCode().call({ from: window.account });
			alert(`Executable code is ${code}`);
		} else {
			alert('The will is not yet executable');
		}
	};

	executeWill = async (event) => {
		Router.pushRoute(`/${window.account}/executeWill/${event.target.value}`);
	};

	Back = async event => {
		event.preventDefault()
		Router.pushRoute('/'+window.account) 
	}

	renderTestor() {
		let a = this.state.willAddress;
		const { Header, Row, HeaderCell, Body, Cell } = Table;
		if (a != '0x0000000000000000000000000000000000000000') {
			let a = this.state.willAddress;
			return (
				<div>
					<Header as="h3" block style={{ color: 'white' }}>
						As A Testor
					</Header>

					<Table>
						<Header>
							<Row>
								<HeaderCell>Will Address</HeaderCell>
								<HeaderCell>Role</HeaderCell>
								<HeaderCell>Description</HeaderCell>
							</Row>
						</Header>
						<Body>
							<Row>
								<Cell>{a}</Cell>
								<Cell>Testor</Cell>
								<Cell>For a given will address you are acting as a Testor</Cell>
							</Row>
						</Body>
					</Table>
				</div>
			);
		} else {
			return (
				<div>
					<Header as="h3" block style={{ color: 'white' }}>
						As A Testor
					</Header>
					<Link route={`/${window.account}/new`}>
						<a>
							<Button primary>Create A Will First</Button>
						</a>
					</Link>
				</div>
			);
		}
	}

	renderBeneficiary() {
		if (this.state.addressBenefArray.length == 0) {
			return (
				<div style={{ marginTop: '30px' }}>
				<Header as="h3" block >
					You Are Not A Beneficiary Of Any Will
				</Header>
				</div>
			);
		}
	}

	render() {
		if(this.state.loading === false){
			const { Header, Row, HeaderCell, Body, Cell } = Table;
			return (
				<div style={{ backgroundColor: 'black', height: '1000px' }}>
			<Layout>
				<h2 className="ui icon center aligned header" style={{ color: 'white' }}>
					<i aria-hidden="true" class="file code icon" style={{ color: 'white' }} />
					Your Role In Different Wills
				</h2>
				<Button primary type="button" onClick={this.Back} style = {{marginTop: '30px',marginBottom: '15px'}}>
							Back
				</Button>
				<div>{this.renderTestor()}</div>
				<div>
					<Header as="h3" block style={{ marginTop: '30px', color: 'white' , marginBottom: '30px'}}>
						As A Beneficiary
					</Header>
				</div>
				<div>{this.renderBeneficiary()}</div>
				{this.state.addressBenefArray.map((address) => {
					return (
						<div>
							<Table>
								<Header>
									<Row>
										<HeaderCell>Will Address</HeaderCell>
										<HeaderCell>Role</HeaderCell>
										<HeaderCell>Description</HeaderCell>
									</Row>
								</Header>
								<Body>
									<Row>
										<Cell>{address}</Cell>
										<Cell>Beneficiary</Cell>
										<Cell>For a given will address you are acting as a Beneficiary</Cell>
										<Cell>
											<Button basic color="yellow" value={address} onClick={this.submit}>
												Check Executable
											</Button>
										</Cell>
										<Cell>
											<Button basic color="green" value={address} onClick={this.executeWill}>
												Execute Will
											</Button>
										</Cell>
									</Row>
								</Body>
							</Table>
						</div>
						
						
					);
				})}
			</Layout>
			</div>
			);
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

export default YourRole;