import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header'; // 헤더 컴포넌트 임포트
import Sidebar from './Sidebar'; // 사이드바 컴포넌트 임포트

const MainLayout = () => {
    const location = useLocation();

    return (
        <div>
            <Header />
            {location.pathname !== '/login' && <Sidebar />} {/* 로그인 화면에서는 사이드바 숨기기 */}
            <main>
                <Outlet /> {/* 자식 라우트가 렌더링됨 */}
            </main>
        </div>
    );
};

export default MainLayout;
