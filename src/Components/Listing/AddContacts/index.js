import React, { Component } from 'react';
import './index.scss';
import ReactFileReader from 'react-file-reader';
import { ReactComponent as Upload } from '../../../assets/icons/upload.svg';
import { processFile } from '../../../helpers/fileUpload';
import ContactResultModal from './ContactResultModal';

class AddContacts extends Component {
    state = {
        displayResultsModal: false,
        processingResult: {}
    };

    toggleModal = () => {
        this.setState({
            ...this.state,
            displayResultsModal: !this.state.displayResultsModal
        });
    };

    handleFiles = (files) => {
        var reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
                ...this.state,
                processingResult: processFile(reader.result.split(/\r\n|\n/)),
                displayResultsModal: true
            })
        }

        reader.onabort = () => alert('Process aborted!');
        reader.onerror = (e) => alert(e);

        reader.readAsText(files[0]);
    };

    render() {
        return(
            <div className="add-contacts-container">
                <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                    <button className="add-contacts-btn">
                        <Upload />
                    </button>
                </ReactFileReader>

                {
                    this.state.displayResultsModal &&
                    <ContactResultModal
                        toggleModal={this.toggleModal}
                        processingResult={this.state.processingResult}
                    />
                }
            </div>
        );
    }
};

export default AddContacts;