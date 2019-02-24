import React, { Component } from 'react';
import './index.scss';
import ContactDetailsModal from '../ContactDetailsModal';

class ContactRow extends Component {
    state = {
        detailsModalVisible: false,
        avatarColor: Math.floor(Math.random()*16777215).toString(16)
    };

    toggleModal = () => {
        this.setState({
            ...this.state,
            detailsModalVisible: !this.state.detailsModalVisible
        });
    };

    render() {
        const { name, emaillist, phonelist, location } = this.props;

        return(
            <div className="contact-details-container">
                <div className="contact-row" onClick={this.toggleModal}>
                    <p className="name">
                        <span
                            className="avatar"
                            style={{
                                background: `#${this.state.avatarColor}`
                            }}
                        >
                            { name.charAt(0) }
                        </span>
                        { name }
                    </p>
                    <p className="email">{ emaillist[0].email }</p>
                    <p className="phone">{ phonelist[0].num }</p>
                    <p className="location">{ location }</p>
                </div>

                {
                    this.state.detailsModalVisible &&
                    <ContactDetailsModal
                        {...this.props}
                        avatarColor={this.state.avatarColor}
                        toggleModal={this.toggleModal}
                    />
                }
            </div>
        );
    }
};

export default ContactRow;