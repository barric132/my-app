// Home.js
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { login } = useAuth(); // AuthContext에서 데이터 가져오기

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Home;
