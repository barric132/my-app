import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth(); // 인증 상태 확인

    return isAuthenticated ? element : <Navigate to="/login" />; // 인증되었으면 페이지 렌더링, 아니면 로그인 페이지로 리다이렉트
};

export default ProtectedRoute;
