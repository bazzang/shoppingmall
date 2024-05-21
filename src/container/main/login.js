import React from 'react';
import '../css/header.css';

export const Login = () => {
    const [form, setForm] = React.useState({
        id : "",
        pw : "" 
    });
    
    
    React.useEffect(() =>{
        
    })

    const onClickLogin = () => {
        console.log('onClickLogin(Login)');
        
    }

    return (
        <div className='header-area'>
            <div style={{width:"500px"}}>로그인, 회원가입 / 마이페이지, 로그아웃 버튼 들어갈 자리 </div>
            <div className='btn' onClick={onClickLogin}>login</div>
            <label>아이디</label>
            <input type='text'></input>
            <label>비밀번호</label>
            <input type='password'></input>
        </div>
    )
}