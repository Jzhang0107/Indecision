import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => 
(
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.removeModal}
        contentLabel="Option"
        closeTimeoutMS={300}
        className='modal'
    >
        <h3 className='modal__title'>Option chosen:</h3>
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button className='button' onClick={props.removeModal}>Okay</button>
    </Modal>
);

export default OptionModal;