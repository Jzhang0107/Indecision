import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => 
(
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.removeModal}
        contentLabel="Option"
    >
        <h3>Waifu chosen:</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button className='button' onClick={props.removeModal}>Okay</button>
    </Modal>
);

export default OptionModal;