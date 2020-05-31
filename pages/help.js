import React, { Component } from 'react';
import { Accordion, Icon, Segment, Button } from 'semantic-ui-react';
import Layout from '../components/layouts/Layout';
import { Router } from './../routes';

export default class Help extends Component {
	state = { activeIndex: 0 };

	handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const { activeIndex } = this.state;
		const newIndex = activeIndex === index ? -1 : index;

		this.setState({ activeIndex: newIndex });
	};

	Back = async event => {
		event.preventDefault()
		Router.pushRoute('/') 
	}

	render() {
		const { activeIndex } = this.state;

		return (
			<div style={{ backgroundColor: 'black', height: '1000px' }}>
			<Layout>
				<Segment inverted>
					<Accordion inverted>
						<Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
							<Icon name="dropdown" />
							What is EtherWill?
						</Accordion.Title>
						<Accordion.Content active={activeIndex === 0}>
							<p>
								EtherWill is the tool with which you can create your own digital will so that in case of
								major life incident or death, future of your loved ones will be secured.
							</p>
						</Accordion.Content>

						<Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
							<Icon name="dropdown" />
							Why should you use EtherWill?
						</Accordion.Title>
						<Accordion.Content active={activeIndex === 1}>
							<p>
								EtherWill brings a solution to the problem of lost digital wealth. In an EtherWill a owner
								is able to list the beneficiaries who will receive the alloted percentage of ethers to each
								benefiaciary and the private key of the owner. Since the information in the Will is private,
								no one except for the beneficiaries will be able to access this information, that too only
								when certain conditions are met.
							</p>
							<p>
								This allows you to trasfer your life savings to family or friends in the event of a severe
								illness or death and hence, prevent a loss of your savings and allow them to be transferred
								to your loved ones.
							</p>
						</Accordion.Content>

						<Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
							<Icon name="dropdown" />
							How to create an EtherWill?
						</Accordion.Title>
						<Accordion.Content active={activeIndex === 2}>
							<div>
								<strong>Step 1:</strong>
							</div>
							<p>
								On the homepage, after you log in click on a button 'Create A New Will'. This will redirect
								you to a form.
							</p>
							<div>
								<strong>Step 2:</strong>
							</div>
							<p>
								Fill the necessary details in the form and click on 'Create Will' button. There!! your
								EtherWill has been created in just two steps!!
							</p>
						</Accordion.Content>
						<Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
							<Icon name="dropdown" />
							How EtherWill works and what is ping information?
						</Accordion.Title>
						<Accordion.Content active={activeIndex === 3}>
							<p>
								EtherWill uses blockchain to secure your digital will. Each indivisual can have atmost{' '}
								<strong>one</strong> EtherWill. And as we can't alter any information once it gets stored on
								the blockchain if user feel need to change his/her will they must first have to{' '}
								<strong>destroy</strong> their Will.
							</p>
							<div>
								<strong>Ping:</strong>
							</div>
							<p>
								Each EtherWill has a active status to detect if the owner of the Will is alive or not. To
								keep the status of the Will active an user must ping it before the time period(time that you
								fill in the form) ends. If the user doesnt ping after the time period ends they are
								considered dead so that beneficiaries will be able to access that Will.
							</p>
						</Accordion.Content>
						<Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
							<Icon name="dropdown" />
							How do we secure your Private Key?
						</Accordion.Title>
						<Accordion.Content active={activeIndex === 4}>
							<p>We encrypt your private key with a secret and store the encrypted Private Key on IPFS.</p>
						</Accordion.Content>
						<Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
							<Icon name="dropdown" />
							What is 'Your Role'?
						</Accordion.Title>
						<Accordion.Content active={activeIndex === 5}>
							<p>
								<strong>Your Role</strong> is the page on which you will be able get information on your
								role (as a benefiaciary or as a testor ) in different Wills.
							</p>
						</Accordion.Content>
						<Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
							<Icon name="dropdown" />
							How to execute a Will?
						</Accordion.Title>
						<Accordion.Content active={activeIndex === 6}>
							<p>
								On <strong>Your Role</strong> page, under as a beneficiary section you will find two buttons
								in front of every Will in which you are acting as a benefiaciary.{' '}
								<strong>Check Executable</strong> button checks if the will is executable and{' '}
								<strong>Execute Will</strong> button executes the Will if it is executable. After Will
								execution you will be able to see the content of that Will.
							</p>
						</Accordion.Content>
					</Accordion>
				</Segment>
				<div>
					<Button primary type="button" onClick={this.Back}>
						Back
					</Button>
				</div>
			</Layout>
			</div>
		);
	}
}








