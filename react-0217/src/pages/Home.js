import React from 'react';

function Home(props) {
  const { auth } = props;
  return (
    <>
      <div>Home</div>
      {auth ? '已登入' : '未登入'}
    </>
  );
}

export default Home;
