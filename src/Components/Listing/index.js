import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import ContactRow from './ContactRow';

const Listing = (props) => {
    return(
        <div className="listing">
            <div className="header">
                <h5 className="name">Name</h5>
                <h5 className="email">Email</h5>
                <h5 className="phone">Phone</h5>
                <h5 className="location">Location</h5>
            </div>

            <div className="content">
                {
                    props.contacts
                        .sort((a, b) => {
                            if(a.name < b.name) { return -1; }
                            if(a.name > b.name) { return 1; }
                            return 0;
                        })
                        .map((contact, i) => <ContactRow {...contact} key={i} />)
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.list
    }
};
export default connect(mapStateToProps)(Listing);