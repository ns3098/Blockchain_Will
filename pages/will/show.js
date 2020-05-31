import React, { Component } from 'react';
import Layout from '../../components/layouts/Layout2';
import { Card, Button, Message } from 'semantic-ui-react';
import { Router } from '../../routes';
const { ethwill } = require('./../EtherWills');

class WillShow extends Component {
	static async getInitialProps(props) {
		console.log(props.query.address);
		return {
			willAddress: props.query.address
		};
	}

	state = {
		permission:'denied',
		beneficiaries: []
	};

	async componentDidMount(){
		console.log(this.props.willAddress)
		const etherwill = await ethwill(this.props.willAddress);
		console.log("HEll ",window.account)
		const willInfo = await etherwill.methods.queryWill().call({ from: window.account });
		console.log(willInfo)
		let mintues = Math.floor(willInfo[3]/60)
		let seconds = willInfo[3]%60;
		let date = mintues+" minutes and "+seconds+" seconds";
		this.setState({
			testor: willInfo[0],
			share: willInfo[1],
			beneficiaries: willInfo[2],
			datevalue: date,
			code: willInfo[4],
			times_pinged: willInfo[5],
			period: willInfo[6]
		})
	}

	

	renderCards1() {
		const testor = this.state.testor
		const datevalue = this.state.datevalue
		const code  = this.state.code;
		const period = this.state.period;

		const items = [
			{
				header: testor,
				description: 'Account address of a testor.',
				style: { overflowWrap: 'break-word', color: 'white' }
			},
			{
				header: datevalue,
				description: 'Time Left before the will is Executable',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: code,
				description: 'Code of your will',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: period+' mintues',
				description: 'Mentions the frequency with which you ping to the contract.',
				style: { overflowWrap: 'break-word' }
			}
		];

		return <Card.Group items={items} />;
	}

	renderCards2() {
		console.log(this.state.beneficiaries)
		const items = this.state.beneficiaries.map((benef, index) => {
			let share = this.state.share[index]
			return {
				header: benef,
				description: 'Share in the Will: '+share+'%',
				style: { overflowWrap: 'break-word', color: 'white' }
			};
		});
		return <Card.Group items={items} />;
	}

	ping = async (event) => {
		event.preventDefault()
		const { willAddress } = this.props;
		console.log(willAddress);
		const etherwill = await ethwill(willAddress);
		if (Notification.permission === "granted") {
			const ping = await etherwill.methods.deposit().send({ from: window.account, value: 1000 });
			console.log(ping);
        }
        else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                this.setState({permission})
			});
			if (permission === "granted") {
				const ping = await etherwill.methods.deposit().send({ from: window.account, value: 1000 });
				console.log(ping);
			}
			else{
                alert('Permission not granted')
            }
		}
		Router.pushRoute('/'+window.account)
	};

	Back = async event => {
		event.preventDefault()
		Router.pushRoute('/'+window.account) 
	}

	render() {
		return (
			<div style={{ backgroundColor: 'black', height: '1000px' }}>
				<Layout>
					<h2
						className="ui icon center aligned header"
						style={{ color: 'white', marginBottom: '30px', marginTop: '30px' }}
					>
						<i aria-hidden="true" class="file code icon" style={{ color: 'white' }} />
						Your Will
					</h2>
					<Button primary type="button" onClick={this.Back} style = {{marginTop: '30px',marginBottom: '15px'}}>
							Back
					</Button>
					{this.renderCards1()}
					{this.renderCards2()}
					<Button primary onClick={this.ping} style={{ marginTop: '30px', marginBottom: '15px' }}>
						Ping
					</Button>
					<Message warning>
    					<Message.Header> YOU CAN ONLY PING WHEN THE TIME LEFT IS LESS THAN THE PERIOD MENTIONED ABOVE</Message.Header>
  					</Message>
					<h2
						className="ui icon center aligned header"
						style={{ color: 'white', marginBottom: '30px', marginTop: '30px' }}
					>Number of times pinged: {this.state.times_pinged}</h2>
				</Layout>
			</div>
		);
	}
}

export default WillShow;
