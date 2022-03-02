// 函式型元件，這邊導入一個SVG Logo
import logo from './logo.svg';
import { useEffect } from 'react';
// import './App.scss';
// 0221 課堂: map 與 key
// import { data } from './data/student';
// 0221 課堂: 邏輯判斷流程控制
import FC from './components/FC';
// 0221 課堂: 父元件傳遞資料到子元件 props
import Parent from './components/Parent';
// 0221 課堂: SocialShare props
import SocialShare from './components/SocialShare';
// 0221 課堂: homework1
import './menu.css';
import Menu from './components/Menu';
// 0222 課堂: 父子元件傳遞資料
import Parent0222 from './components/Parent0222';
// 0222 課堂: homework2
import ArrayPractice from './components/ArrayPractice';
// 0222 課堂: 實例(購物車)
import OrderList from './components/OrderList';
import Summary from './components/Summary';
import { useState } from 'react';
// 0222 課堂: 多樣商品的狀態使用陣列作處理
import MultipleItem from './components/MultipleItem';
// 0224 課堂: React可控表單元素
import InputValue from './components/InputValue';
// 0224 課堂: 多個表單元素共用一個狀態
import InputObjectState from './components/InputObjectState';
// 0224 課堂: 關閉HTML5預設錯誤訊息，搜尋自訂錯誤訊息，並展示在指定位置
import HTML5FormValidate from './components/HTML5FormValidate';
// 0224 課堂: 表單驗證完成版
import FormValidate from './components/FormValidate';
import './HTML5Form.css';
// 0225 課堂: RefsForm vs IdForm
import IdForm from './components/IdForm';
import RefsForm from './components/RefsForm';
// 0225 課堂: 類別型元件生命週期方法
import CCLifeCycle from './components/CCLifeCycle';
// 0225 課堂: 函式型元件生命週期方法
import FCLifeCycle from './components/FCLifeCycle';
// 0225 課堂: 旋轉指示器
import UserList from './components/UserList';
// Homework 練習題4
import BS4RegisterForm from './components/BS4RegisterForm';
// HW4 產品列表過濾頁面
import FilterBar from './components/HW4_FilterBar';
import ProductList from './components/HW4_ProductList';
import SearchBar from './components/HW4_SearchBar';
import SortBar from './components/HW4_SortBar';
import { data } from './data/hw4_product';
// 0302 課堂: JqueryTest
import JqueryTest from './components/JqueryTest';
// 0302 課堂: JqueryTestRefs
import JqueryTestRefs from './components/JqueryTestRefs';
// 0302 課堂: ReactBootstrap
import BootstrapTest from './components/BootstrapTest';
// 0302 課堂: react-icons
import ReactIcon from './components/ReactIcons';
// 0302 課堂: router
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './pages/About';
import Product from './pages/Product';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const products = [
  {
    id: 1,
    name: 'Brown T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: 'White T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: 'Black T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 500,
  },
  {
    id: 4,
    name: 'Black T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 100,
  },
  {
    id: 5,
    name: 'White T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 600,
  },
];
// 動態設置初始化狀態
// const initState = (array) => {
//   const state = [];
//   for (let i = 0; i < array.length; i++) {
//     // 假設所有商品初始值都是一個
//     state.push(1);
//   }
//   return state;
// };

// 購物車初始化狀態，用陣列中的物件狀態
const initStateWithObject = (products) => {
  const state = [];
  for (let i = 0; i < products.length; i++) {
    state.push({ ...products[i], count: 1 });
  }
  return state;
};

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
  // return (
  //   <>
  //     <Menu />
  //   </>
  // );

  // 0222 課堂: 父子元件傳遞資料
  // return (
  //   <>
  //     <Parent0222 />
  //   </>
  // );

  // 0222 課堂: homework2
  // return (
  //   <>
  //     <ArrayPractice />
  //   </>
  // );

  // 0222 課堂: 實例(購物車)
  // todo:: 把count屬性加進新物件中，研究reduce累加器API寫法
  // 多樣產品狀態: 物件
  // [{
  //     id: 1,
  //     name: 'Brown T-shirt',
  //     categroy: 'Shirt',
  //     image: 'https://i.imgur.com/1GrakTl.jpg',
  //     price: 300,
  //     count:1,
  // }]

  // counts is an array which contains amount of each item.
  // const [counts, setCounts] = useState(initState(products));
  // 陣列物件狀態寫法
  // const [productsInOrder, setProductsInOrder] = useState(
  //   initStateWithObject(products)
  // );

  // Summary 計算
  // initial state of totalAmount
  // const totalAmount = () => {
  //   let totalCount = 0;
  //   for (let i = 0; i < counts.length; i++) {
  //     totalCount += counts[i];
  //   }
  //   return totalCount;
  // };
  // 陣列物件狀態寫法
  // const productCount = () => {
  //   let totalCount = 0;
  //   for (let i = 0; i < productsInOrder.length; i++) {
  //     totalCount += productsInOrder[i].count;
  //   }
  //   return totalCount;
  // };

  // initial state of totalPrice
  // const totalPrice = () => {
  //   let sum = 0;
  //   for (let i = 0; i < products.length; i++) {
  //     sum += counts[i] * products[i].price;
  //   }
  //   return sum;
  // };
  // 陣列物件狀態寫法
  // const total = () => {
  //   let sum = 0;
  //   for (let i = 0; i < productsInOrder.length; i++) {
  //     sum += productsInOrder[i].count * productsInOrder[i].price;
  //   }
  //   return sum;
  // };

  // 傳資料到子元件
  // return (
  //   <div className="card">
  //     <div className="row">
  //       {/* <OrderList
  //         products={products}
  //         counts={counts}
  //         setCounts={setCounts}
  //         totalAmount={totalAmount()}
  //       />
  //       <Summary totalAmount={totalAmount()} totalPrice={totalPrice()} /> */}
  //       <OrderList
  //         productsInOrder={productsInOrder}
  //         setProductsInOrder={setProductsInOrder}
  //         productCount={productCount()}
  //       />
  //       <Summary productCount={productCount()} total={total()} />
  //     </div>
  //   </div>
  // );

  // 0222 課堂: 多樣商品的狀態使用陣列作處理
  // return (
  //   <>
  //     <MultipleItem />
  //   </>
  // );

  // 0224 課堂: React可控表單元素
  // return (
  //   <>
  //     <InputValue />
  //   </>
  // );

  // 0224 課堂: 多個表單元素共用一個狀態
  // return (
  //   <>
  //     <InputObjectState />
  //   </>
  // );

  // 0224 課堂: 關閉HTML5預設錯誤訊息，搜尋自訂錯誤訊息，並展示在指定位置
  // return (
  //   <>
  //     <HTML5FormValidate />
  //   </>
  // );

  // 0224 課堂: 表單驗證完成版
  // return (
  //   <>
  //     <FormValidate />
  //   </>
  // );

  // 0225 課堂: Refs-IdForm
  // return (
  //   <>
  //     <h3>Id Form</h3>
  //     <IdForm />
  //     <hr />
  //     <h3>Refs Form</h3>
  //     <RefsForm />
  //   </>
  // );

  // 0225 課堂: 類別型元件生命週期方法
  // 0225 課堂: 函式型元件生命週期方法
  // const [alive, setAlive] = useState(true);
  // return (
  //   <>
  //     {/* {alive && <CCLifeCycle />} */}
  //     {alive && <FCLifeCycle />}
  //     <button
  //       onClick={() => {
  //         setAlive(!alive);
  //       }}
  //     >
  //       {alive ? '卸載元件' : '掛載元件'}
  //     </button>
  //   </>
  // );

  // 0225 課堂: 旋轉指示器
  // return (
  //   <>
  //     <UserList />
  //   </>
  // );

  // Homework 練習題4
  // return (
  //   <>
  //     <BS4RegisterForm />
  //   </>
  // );

  // HW4 產品列表過濾頁面
  // const [products, setProducts] = useState([]);
  // const [displayProducts, setDisplayProducts] = useState([]);

  // const [tags, setTags] = useState([]);
  // const [searchWord, setSearchWord] = useState('');
  // const [sortBy, setSortBy] = useState('');

  // useEffect(() => {
  //   setProducts(data);
  //   setDisplayProducts(data);
  // }, []);

  // return (
  //   <>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-md-12">
  //           <div className="grid search">
  //             <div className="grid-body">
  //               <div className="row">
  //                 <div className="col-md-3">
  //                   <FilterBar />
  //                 </div>

  //                 <div className="col-md-9">
  //                   <h2>
  //                     <i className="fa fa-file-o"></i> 商品列表
  //                   </h2>
  //                   <hr />
  //                   <SearchBar />
  //                   <div className="padding"></div>
  //                   <SortBar />
  //                   <ProductList products={displayProducts} />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  // 0302 課堂: JqueryTest
  // 0302 課堂: JqueryTestRefs
  // 0302 課堂: ReactBootstrap
  // 0302 課堂: react-icons
  // return (
  //   <>
  //     {/* <JqueryTest /> */}
  //     {/* <JqueryTestRefs /> */}
  //     <BootstrapTest />
  //     <ReactIcon />
  //   </>
  // );

  // 0302 課堂: router
  const [auth, setAuth] = useState(false);
  return (
    <Router>
      <>
        <h2>a href</h2>
        <a href="/">Home</a>
        <br />
        <a href="/login">LogIn</a>
        <hr />
        <h2>Link to</h2>
        <Link to="/">Home</Link>
        <br />
        <Link to="/login">LogIn</Link>
        <hr />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/product">
            <Product />
          </Route>

          <Route path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>

          <Route exact path="/">
            <Home auth={auth} />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
