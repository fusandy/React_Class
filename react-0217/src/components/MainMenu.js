// 0303 課堂: Router實作 Menu

import { Link } from 'react-router-dom';

function MainMenu(props) {
  return (
    <div>
      <Link to="/">首頁</Link>
      <br />
      <Link to="/product-list">產品清單(Params)</Link>
      <br />
      <Link to="/product-list-qs">產品清單(Query String)</Link>
      <br />
      <Link to="/login">登入</Link>
    </div>
  );
}
export default MainMenu;
