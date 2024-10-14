import React, { useState } from 'react';
import { useAuth } from './AuthContext'; // AuthContext에서 인증 관련 함수 가져오기
import { useNavigate } from 'react-router-dom'; // useNavigate를 가져오기

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate(); // navigate 객체 생성

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '1' && password === '1') {
            login(); // 로그인 상태 설정
            navigate('/main'); // 메인 페이지로 이동
        } else {
            alert('아이디 또는 비밀번호가 잘못되었습니다.');
        }
    };

    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default Login;
