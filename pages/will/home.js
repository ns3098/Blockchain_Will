import React, { Component } from 'react';
import { Button, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react';
const { wills } = require('./../wills');
import Layout from '../../components/layouts/Layout2';
import { Link } from './../../routes';

class EtherWill extends Component {
	static async getInitialProps(props) {
		return { add: props.query.address }
	}
	state = {
		willAddress: '',
		loading: true
	};
	async componentDidMount() {
		const will = await wills();
		const willAddress = await will.methods.getTestor(window.account).call({ from: window.account });
		this.setState({ willAddress });
		this.setState({loading: false})
	}

	renderEtherWill() {
		let a = this.state.willAddress;
		if (a !== '0x0000000000000000000000000000000000000000') {
			//if the will is created then redirect to a will page
			return (
				<div style={{ marginTop: 'auto' }}>
					<Segment placeholder style={{ marginTop: 'auto', backgroundColor: 'black' }}>
						<Grid columns={3} stackable textAlign="center">
							<Grid.Row verticalAlign="middle">
								<Grid.Column>
									<Header icon style={{ color: 'white' }}>
										<Icon name="search" />
										Your Role
									</Header>
									<div>
										<Link route={`/${this.props.add}/role`}>
											<a>
												<Button primary>Your Role</Button>
											</a>
										</Link>
									</div>
								</Grid.Column>

								<Grid.Column>
									<Header icon style={{ color: 'white' }}>
										<Icon name="arrow circle right" />
										Go to Your Will
									</Header>
									<div>
										<Link route={`/will/${a}`}>
											<a>
												<Button primary>Go!</Button>
											</a>
										</Link>
									</div>
								</Grid.Column>

								<Grid.Column>
									<Header icon style={{ color: 'white' }}>
										<Icon name="zip" />
										Destroy Your Will
									</Header>
									<div>
										<Link route={`/${this.props.add}/selfdestruct`}>
											<a>
												<Button class="negative ui button">Destruct Button!</Button>
											</a>
										</Link>
									</div>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Segment>
				</div>
			);
		} else {
			return (
				<div style={{ marginTop: 'auto' }}>
					<Segment placeholder style={{ marginTop: 'auto', backgroundColor: 'black' }}>
						<Grid columns={2} stackable textAlign="center">
							<Divider vertical style={{ color: 'white' }}>
								Or
							</Divider>

							<Grid.Row verticalAlign="middle">
								<Grid.Column>
									<Header icon style={{ color: 'white' }}>
										<Icon name="search" />
										Your Role
									</Header>
									<div>
										<Link route={`/${this.props.add}/role`}>
											<a>
												<Button primary>Your Role</Button>
											</a>
										</Link>
									</div>
								</Grid.Column>

								<Grid.Column>
									<Header icon style={{ color: 'white' }}>
										<Icon name="plus" />
										Create A New Will
									</Header>
									<div>
										<Link route={`/${this.props.add}/new`}>
											<a>
												<Button primary>Create</Button>
											</a>
										</Link>
									</div>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Segment>
				</div>
			);
		}
	}

	render() {
		if(this.state.loading === false){
			return (
				<div style={{ backgroundColor: 'black', height: '1000px' }}>
					<Layout>
						<div>
							<Header as="h1" icon textAlign="center">
								<Icon name="file code" circular style={{ color: 'white' }} />
								<Header.Content style={{ color: 'white' }}>Demo</Header.Content>
							</Header>
							<p
								style={{ fontSize: '2em', color: 'white', marginLeft: '9.3em', marginRight: '4em',  marginTop: '4em' }}
								textAlign="center"
							>
								A New Way To Secure Future Of Your Loved Ones!
							</p>
						</div>
						<div style={{ marginTop: '125px' }}>{this.renderEtherWill()}</div>
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

export default EtherWill;
