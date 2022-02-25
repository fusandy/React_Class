import { useState, useEffect } from 'react';
import userRawData from '../data/users.json';

function UserList(props) {
  const [users, setUsers] = useState([]);
  // 初始化是否載入資料的狀態
  const [loading, setLoading] = useState(false);
  // 搜尋輸入框的狀態
  const [searchWord, setSearchWord] = useState('');

  // 從伺服器載入資料(官網建議寫在useEffect外面)
  const fetchUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  };

  // 輸入框搜尋篩選器
  const fetchFilterUser = async (searchWord) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users?name_like=' + searchWord
    );
    const data = await response.json();
    setUsers(data);
  };

  //didMount(限初始第一次)
  useEffect(() => {
    // 開啟載入資料指示
    setLoading(true);

    // 載入資料(AJAX/fetch...)
    // setUsers(userRawData);
    fetchUser();
  }, []);

  // 每一次update都會跑一次
  // X秒後自動關閉資料指示器
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        return setLoading(false);
      }, 500);
    }
  }, [loading]);

  const spinner = (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  const display = (
    <>
      <input
        type="text"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setLoading(true);
          fetchFilterUser(searchWord);
        }}
      >
        Search
      </button>
      <table>
        <tbody>
          {users.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );

  //   const userListTable = (
  //     <table className="table table-bordered table-striped">
  //       <thead>
  //         <tr>
  //           <th>ID</th>
  //           <th>Name</th>
  //           <th>Email</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {users.map((v, i) => {
  //           return (
  //             <tr key={v.id}>
  //               <td>{v.id}</td>
  //               <td>{v.name}</td>
  //               <td>{v.email}</td>
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //   );

  return (
    <>
      <div className="center">{loading ? spinner : display}</div>
    </>
  );
}

export default UserList;
