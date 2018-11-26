import React from 'react';

const Modal = ({modal}) => {
    let displayModal = 'app-modal-hidden';
    if(modal.display) {
        displayModal = 'app-modal-visible';
    }
    const modalClass = ["app-modal", modal.type, displayModal];
    return (
        <div className={modalClass.join(" ")}>
            <div className="app-wrapper">
                <div className="app-content">
                    {modal.text}
                </div>
            </div>
        </div>
    );
};

export default Modal;
