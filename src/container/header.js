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
        // <div className='header-area'>
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
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
    )
}