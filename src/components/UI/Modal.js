import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className="backdrop" onClick={props.onClose} />
};

const ModalOverlay = props => {
    return <div className="modal">
        <div className="content">{props.children}</div>
    </div>
};

const port = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,port)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,port)}
        </>
    )
}

export default Modal;
