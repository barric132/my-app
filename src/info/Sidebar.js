import React from 'react';
import { Link } from 'react-router-dom';
import './info_style/Sidebar.scss'; // 경로 수정

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-header">SEWONATOS</h2>
            <Link to="/main" className="sidebar-item">메인 페이지</Link>
            <Link to="/sales/sales-management" className="sidebar-item">판매 관리</Link>
            <Link to="/sales/head-office-inventory-management" className="sidebar-item">본사 입출 관리</Link>
            <Link to="/sales/inter-store-transfer-management" className="sidebar-item">점 간 이동 관리</Link>
            <Link to="/sales/inventory-management" className="sidebar-item">재고 관리</Link>
            <Link to="/sales/customer-management" className="sidebar-item">고객 관리</Link>
            <Link to="/sales/basic-management" className="sidebar-item">기초 관리</Link>
            <Link to="/sales/message-management" className="sidebar-item">메세지 관리</Link>
            <Link to="/sales/system-management" className="sidebar-item">시스템 관리</Link>
        </div>
    );
};

export default Sidebar;
