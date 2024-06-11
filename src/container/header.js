import React from 'react';
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
        // <div classNameName='header-area'>
        //     <Modal 
        //         isOpen={isOpen} 
        //         onRequestClose={closeModal} 
        //         style={{
        //             content: {
        //                 width: '500px',
        //                 height: '500px',
        //                 margin: 'auto'
        //             }
        //         }}
        //     >
        //         <Login onClose={closeModal}/>
        //     </Modal>

        //     <button  onClick={openModal}>로그인</button>
        // </div>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop</p>
                </div>
            </div>
        </header>
    )
}