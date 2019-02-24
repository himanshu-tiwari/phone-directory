import React from 'react';
import './index.scss';

const ContactRow = (props) => {
    return(
        <div className="contact-row">
            <p className="name">{props.name}</p>
            <p className="email">{props.emaillist[0].email}</p>
            <p className="phone">{props.phonelist[0].num}</p>
            <p className="location">{props.location}</p>
            
        </div>
    );
};

export default ContactRow;