import React from 'react';
import Sidebar from './Sidebar';
import './info_style/Main.scss'; // 경로 수정

const Main = () => {
    return (
        <div className="main-layout">
            <Sidebar />
            <div className="main-content">
                <div className="header">
                    <h1>메인 페이지</h1>
                </div>
                <div className="content">
                    {/* 여기에 콘텐츠가 들어갑니다. */}
                </div>
            </div>
        </div>
    );
};

export default Main;
