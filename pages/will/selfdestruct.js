import React, { Component } from 'react';
import Layout from '../../components/layouts/Layout2';
import { Form, Button, Message } from 'semantic-ui-react';
const { ethwill } = require('./../EtherWills');
const { wills } = require('./../wills');
import { Router } from '../../routes';

class Selfdestruct extends Component {
    state = {
        account:'',
        code:'',
        willAddress:'',
		permission: 'denied',
		loading: false
    }

    async componentDidMount(){
        let will = await wills();
        this.setState({account:window.account})
        const willAddress = await will.methods.getTestor(window.account).call({ from: window.account });
		this.setState({ willAddress });
    }

    onSubmit = async event => {
		event.preventDefault();
		this.setState({loading: true})
        let will = await wills();
        let etherwill = await ethwill(this.state.willAddress);
        await etherwill.methods.deleteWill(this.state.code).send({from:this.state.account});
		await will.methods.deleteWill().send({from:this.state.account});
		this.setState({loading: false})
        Router.pushRoute('/'+this.state.account)
	}

	Back = async event => {
		event.preventDefault()
		Router.pushRoute('/'+this.state.account)
	}

    render() {
		return (
			<div style={{ backgroundColor: 'black', height: '1000px' }}>
				<Layout>
					<div style={{ marginTop: '30px' }}>
						<Message negative>
							<Message.Header>BEWARE:</Message.Header>
							<p>
								If you are sure about this then enter code of the will {this.state.willAddress} and the
								press Selfdestruct button.
							</p>
						</Message>
					</div>
					<Message warning>
						<Message.Header>Code for will:</Message.Header>
						<p>{this.state.willAddress}</p>
					</Message>
					<Form onSubmit={this.onSubmit}>
						<Form.Field>
							<input
								value={this.state.code}
								onChange={(event) => this.setState({ code: event.target.value })}
							/>
						</Form.Field>
						<Button inverted color='red' value="Submit" loading={this.state.loading}>
							Selfdestruct Will
						</Button>
						<Button primary type="button" onClick={this.Back}>
							Back
						</Button>
					</Form>
				</Layout>
			</div>
		);
	}
}

export default Selfdestruct;
