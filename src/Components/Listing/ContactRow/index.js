import React from 'react';
import './index.scss';

const ContactRow = (props) => {
    console.log(Math.floor(Math.random()*16777215).toString(16));
    return(
        <div className="contact-row">
            <p className="name">
                <span
                    className="avatar"
                    style={{
                        background: "#"+Math.floor(Math.random()*16777215).toString(16)
                    }}
                >
                    { props.name.charAt(0) }
                </span>
                {props.name}
            </p>
            <p className="email">{props.emaillist[0].email}</p>
            <p className="phone">{props.phonelist[0].num}</p>
            <p className="location">{props.location}</p>
            
        </div>
    );
};

export default ContactRow;