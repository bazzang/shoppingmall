import React from 'react';
import axios from 'axios';

export const Login = ({onClose}) => {
    const [form, setForm] = React.useState({
        id : "",
        pw : "" 
    });
    
    const [userId, setUserId] = React.useState("");
    const [userPw, setUserPw] = React.useState("");
    
    React.useEffect(() =>{
        
    })

    const onClickLogin = async () => {
        console.log('onClickLogin(Login)');
        try {
            // POST 요청은 body에 실어 보냄
            const response = await axios.post('/user/login', {
                id: userId,
                pw: userPw
            });
            console.log('response', response);
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
        <div>
            
            <label>아이디</label>
            <input type='text' onChange={onChangeId} />
            <label>비밀번호</label>
            <input type='password' onChange={onChangePw} />
            <button onClick={onClickLogin}>login</button>
            <button onClick={onClose}>닫기</button>
        </div>
    )
}
