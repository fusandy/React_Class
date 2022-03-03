import React from 'react';
import { useHistory } from 'react-router-dom';

function Login(props) {
  const { auth, setAuth } = props;
  let history = useHistory();
  return (
    <>
      <h1>LogIn</h1>
      {auth ? '已登入' : '未登入'}
      <button
        onClick={() => {
          setAuth(!auth);

          alert('Welcome Back! Transfer to Home');
          // 跳轉至首頁
          history.push('/');
        }}
      >
        {auth ? '登出' : '登入'}
      </button>
      <br />
      <button
        onClick={() => {
          // 回到上一頁
          history.goBack();
        }}
      >
        Prev Page
      </button>
    </>
  );
}

export default Login;
