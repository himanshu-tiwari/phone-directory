import React from 'react';
import './index.scss';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { ReactComponent as Phone } from '../../../assets/icons/phone-call.svg';
import { ReactComponent as Email } from '../../../assets/icons/email.svg';
import { ReactComponent as Suitcase } from '../../../assets/icons/suitcase.svg';
import { ReactComponent as Cake } from '../../../assets/icons/cake.svg';
import moment from 'moment';

const ContactDetailsModal = (props) => {
    const { name, avatarColor, toggleModal, phonelist, emaillist, company, title, birthday } = props;

    return(
        <div className="contact-details-modal-container modal-container">
            <div className="contact-details-modal modal">
                <Close className="close" onClick={toggleModal} />
                <h3 className="modal-heading">
                    <span
                        className="avatar"
                        style={{
                            background: "#"+avatarColor
                        }}
                    >
                        { name.charAt(0) }
                    </span>
                    { name }
                </h3>
                
                <div className="modal-content">
                    <h5 className="heading">Contact Details</h5>

                    <div className="phone">
                        <Phone />

                        {
                            phonelist.map((phone, i) => <p key={i}>
                                { phone.num }
                                <span className="type"> . { phone.type }</span>
                            </p>)
                        }
                    </div>

                    <div className="email">
                        <Email />

                        {
                            emaillist.map((email, i) => <p key={i}>
                                { email.email }
                                <span className="type"> . { email.type }</span>
                            </p>)
                        }
                    </div>

                    {
                        (company || title)
                        ? <div className="work">
                            <Suitcase />
                            { title ? <p>{title}</p> : '' }
                            { title && company ? <p className="at">at</p> : '' }
                            { company ? <p>{company}</p> : '' }
                        </div>
                        : ''
                    }

                    {
                        birthday
                        ? <div className="birthday">
                            <Cake />
                            <p>{ moment(new Date(birthday)).format("MMM DD, YYYY") }</p>
                        </div>
                        : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default ContactDetailsModal;