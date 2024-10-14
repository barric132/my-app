import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './context/Login';
import Main from './info/Main';
import ProtectedRoute from './context/ProtectedRoute';
import SalesManagement from './components/SalesManagement/SalesManagement/SalesManagement';
import HeadOfficeInventoryManagement from './components/SalesManagement/HeadOfficeInventoryManagement/HeadOfficeInventoryManagement';
import InterStoreTransferManagement from './components/SalesManagement/InterStoreTransferManagement/InterStoreTransferManagement';
import InventoryManagement from './components/SalesManagement/InventoryManagement/InventoryManagement';
import CustomerManagement from './components/SalesManagement/CustomerManagement/CustomerManagement';
import BasicManagement from './components/SalesManagement/BasicManagement/BasicManagement';
import MessageManagement from './components/SalesManagement/MessageManagement/MessageManagement';
import SystemManagement from './components/SalesManagement/SystemManagement/SystemManagement';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/main" element={<ProtectedRoute element={<Main />} />} />

          {/* 판매 관리 페이지 및 하위 경로 */}
          <Route path="/sales/sales-management" element={<ProtectedRoute element={<SalesManagement />} />} />
          <Route path="/sales/head-office-inventory-management" element={<ProtectedRoute element={<HeadOfficeInventoryManagement />} />} />
          <Route path="/sales/inter-store-transfer-management" element={<ProtectedRoute element={<InterStoreTransferManagement />} />} />
          <Route path="/sales/inventory-management" element={<ProtectedRoute element={<InventoryManagement />} />} />
          <Route path="/sales/customer-management" element={<ProtectedRoute element={<CustomerManagement />} />} />
          <Route path="/sales/basic-management" element={<ProtectedRoute element={<BasicManagement />} />} />
          <Route path="/sales/message-management" element={<ProtectedRoute element={<MessageManagement />} />} />
          <Route path="/sales/system-management" element={<ProtectedRoute element={<SystemManagement />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
