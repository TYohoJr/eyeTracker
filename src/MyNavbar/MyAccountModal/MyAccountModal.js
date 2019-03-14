import React from 'react';
import './MyAccountModal.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { connect } from 'react-redux';
// import axios from 'axios';
// import Cookies from 'universal-cookie';

// const cookie = new Cookies();

class MyAccountModal extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            modal: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle}>Account</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Account</ModalHeader>
                    <ModalBody>
                        <p>Placeholder</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle}>Done</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default connect((state) => (state))(MyAccountModal);