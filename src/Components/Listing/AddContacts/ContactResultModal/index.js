import React from 'react';
import './index.scss';
import { ReactComponent as Close } from '../../../../assets/icons/close.svg';
import { ReactComponent as Check } from '../../../../assets/icons/check-circle-filled.svg';
import { ReactComponent as Cross } from '../../../../assets/icons/cross-circle-filled.svg';
import { ReactComponent as Arrow } from '../../../../assets/icons/arrowright.svg';
import { ReactComponent as Retry } from '../../../../assets/icons/reload.svg';
import { connect } from 'react-redux';
import { updateContacts } from '../../../../store/actions/contactActions';

const ContactResultModal = (props) => {
    const { toggleModal, processingResult, updateContacts } = props;

    console.log(processingResult);
    return(
        <div className="contact-result-modal-container modal-container">
            <div className="contact-result-modal modal">
                <Close className="close" onClick={toggleModal} />
                <h3 className="modal-heading">Contacts Uploaded</h3>
                
                <div className="content-container">
                    <div className="modal-content">
                        <h5 className="heading">Required columns</h5>

                        <div className="columns">
                            <p>
                                {
                                    processingResult.success
                                    ? <Check />
                                    : (
                                        processingResult.columns.name === "available"
                                        ? <Check />
                                        : <Cross />
                                    )
                                }
                                Name
                            </p>
                            
                            <p>
                                {
                                    processingResult.success
                                    ? <Check />
                                    : (
                                        processingResult.columns.location === "available"
                                        ? <Check />
                                        : <Cross />
                                    )
                                }
                                Location
                            </p>

                            <p>
                                {
                                    processingResult.success
                                    ? <Check />
                                    : (
                                        processingResult.columns.phonelist === "available"
                                        ? <Check />
                                        : <Cross />
                                    )
                                }
                                Phone List
                            </p>

                            <p>
                                {
                                    processingResult.success
                                    ? <Check />
                                    : (
                                        processingResult.columns.emaillist === "available"
                                        ? <Check />
                                        : <Cross />
                                    )
                                }
                                Email List
                            </p>
                        </div>
                                
                        {
                            processingResult.success
                            ? <button onClick={() => {
                                updateContacts(processingResult.list);
                                toggleModal();
                            }}>
                                Continue <Arrow />
                            </button>
                            : <button onClick={toggleModal}>Try Again <Retry /></button>
                        }
                    </div>

                    <div className="modal-content">
                        <h5 className="heading">Columns Received</h5>
                        
                        <div className="columns columns-2">
                            {
                                processingResult.headers.map((header, i) => <p key={i}>{header}</p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateContacts: (list) => dispatch(updateContacts(list))
    };
};

export default connect(null, mapDispatchToProps)(ContactResultModal);