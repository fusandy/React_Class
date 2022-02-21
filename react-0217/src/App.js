// 函式型元件，這邊導入一個SVG Logo
import logo from './logo.svg';
import './App.css';
// 0221 課堂: map 與 key
import { data } from './data/student';
// 0221 課堂: 邏輯判斷流程控制
import FC from './components/FC';
// 0221 課堂: 父元件傳遞資料到子元件 props
import Parent from './components/Parent';
// 0221 課堂: SocialShare props
import SocialShare from './components/SocialShare';
// 0221 課堂: homework1
import './menu.css';
import Menu from './components/Menu';

function App() {
  // 原始老師講義程式碼
  // return (
  //   // 虛擬 DOM
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  // 0221 課堂: 嵌入JS變數
  // return (
  //   <>
  //     {/* 嵌入JS變數 */}
  //     <h2>Number</h2>
  //     {123}
  //     {123 + 1}
  //     <h2>Boolean</h2>
  //     <p>布林值的結果不會渲染在網頁上</p>
  //     {true}
  //     {false}
  //     <h2>String</h2>
  //     {'abc'}
  //     {'abc' + 'def'}
  //     <h2>null, undefined</h2>
  //     <p>null, undefined 不會渲染在網頁上</p>
  //     {null}
  //     {undefined}
  //     <h2>Array</h2>
  //     <p>Array中若有boolean, null, undefined，也一樣不會渲染到網頁上</p>
  //     {[1, 2, 'abc', true, null, undefined]}
  //     <h2>Object</h2>
  //     <p>在JSX語法中，無法渲染一個純物件，會造成中斷錯誤</p>
  //     <p>object vs. plain object 純物件</p>
  //     {/* {{ a: 1, b: 2 }} */}
  //     {/* {{new Date()}} */}
  //     <h2>function</h2>
  //     <p>沒有呼叫function，所以網頁上也不會有畫面</p>
  //     {() => console.log('h1')}
  //   </>
  // )

  // 0221 課堂: map 與 key
  // console.log(data);
  // const newData = data.map((v, i) => {
  //   return <li>{v.name}</li>;
  // });
  // console.log(newData);
  // return (
  //   <>
  //     {/* v:value */}
  //     {/* i:index */}
  //     {/* map return a new array */}
  //     {/* 列表式/集合式的資料，基本上都用map呈現 */}
  //     <ul>
  //       {data.map((v, i) => {
  //         return <li key={i}>{v.name}</li>;
  //       })}
  //     </ul>
  //   </>
  // );

  // 0221 課堂: 邏輯判斷流程控制
  // return (
  //   <>
  //     <FC />
  //   </>
  // );

  // 0221 課堂: 父元件傳遞資料到子元件 props
  // return (
  //   <>
  //     <Parent />
  //   </>
  // );

  // 0221 課堂: SocialShare props
  // return (
  //   <>
  //     <SocialShare url="http://localhost:3000" round={true} />
  //   </>
  // );

  // 0221 課堂: homework1
  return (
    <>
      <Menu />
    </>
  );
}

export default App;
