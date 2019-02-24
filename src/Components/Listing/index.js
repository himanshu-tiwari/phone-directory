import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import ContactRow from './ContactRow';

const Listing = (props) => {
    return(
        <div className="listing">
            <div className="header">
                <h5>Name</h5>
                <h5>Email</h5>
                <h5>Phone</h5>
            </div>
            {
                props.contacts.map((contact, i) => <ContactRow {...contact} key={i} />)
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.list
    }
};
export default connect(mapStateToProps)(Listing);