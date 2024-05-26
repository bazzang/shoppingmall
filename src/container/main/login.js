import React from 'react';
// import '../css/header.css';
import axios from 'axios';
import swiper from 'swiper';

export const Login = () => {
    const [form, setForm] = React.useState({
        id : "",
        pw : "" 
    });
    
    const [userId, setUserId] = React.useState("");
    const [userPw, setUserPw] = React.useState("");
    
    React.useEffect(() =>{
        
    })

    const onClickLogin = () => {
        console.log('onClickLogin(Login)');
        try {
        // POST 요청은 body에 실어 보냄
            axios.post('/login', {
                id: userId,
                pw: userPw
            }).then(response => console.log('response', response));
        } catch (e) {
            console.error(e);
        }
        
    }

    const onChangeId = (e) => {
        setUserId(e.target.value);
    }

    const onChangePw = (e) => {
        setUserPw(e.target.value);
    }

    return (
        <div className='header-area'>
            <div style={{width:"500px"}}>로그인, 회원가입 / 마이페이지, 로그아웃 버튼 들어갈 자리 </div>
            <div className='btn' onClick={onClickLogin}>login</div>
            <label>아이디</label>
            <input type='text' onChange={onChangeId} />
            
            <label>비밀번호</label>
            <input type='password' onChange={onChangePw} />
            
        </div>
    )
}