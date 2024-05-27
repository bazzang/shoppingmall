import React from 'react';
import '../css/header.css';
import '../css/modal.css';
import Modal from 'react-modal';
import { Login } from './main/login';

export const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    React.useEffect(() =>{

    })

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const onClickLogin = () => {
        console.log('onClickLogin(header)');
    }

    return (
        <div className='header-area'>
            <Modal isOpen={isOpen} onClose={closeModal} className="overlay">
                <Login className="modal-content"/>
            </Modal>
            <div className='btn' onClick={onClickLogin}>login</div>
        </div>
    )
}