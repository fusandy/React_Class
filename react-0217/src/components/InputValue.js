// 0224 課堂: React可控表單元素
import { useState } from 'react';

function InputValue() {
  const [inputText, setInputText] = useState('');
  const [textArea, setTextArea] = useState('');

  // radio group
  const [radioValue, setRadioValue] = useState('');
  // 先用陣列接住為比較好的寫法
  const cityOptions = ['台北市', '新北市', '桃園市'];

  // select
  const [selectedValue, setSelectedValue] = useState('');

  // 單選checkbox
  const [agree, setAgree] = useState(false);
  // 複選checkbox:checkbox group使用狀態陣列
  const [likeList, setLikeList] = useState([]);
  const musicOptions = ['hiphop', 'jazz', 'R&B'];

  return (
    <>
      <h3>可控表單元素</h3>
      <h5>文字輸入框input</h5>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <h5>文字輸入區域textarea</h5>
      <textarea
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value);
        }}
      />
      <h5>選項按鈕radio</h5>
      {cityOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              value={v}
              id={'cityOptions' + i}
              checked={v === radioValue}
              onChange={(e) => {
                setRadioValue(e.target.value);
              }}
            />
            <label htmlFor={'cityOptions' + i}>{v}</label>
          </div>
        );
      })}
      {/* 粗暴重工寫法 */}
      {/* <div>
        <input
          type="radio"
          value="台北市"
          checked={'台北市' === radioValue}
          onChange={(e) => {
            setRadioValue(e.target.value);
          }}
        />
        <label htmlFor="">台北市</label>
      </div>
      <div>
        <input
          type="radio"
          value="新北市"
          checked={'新北市' === radioValue}
          onChange={(e) => {
            setRadioValue(e.target.value);
          }}
        />
        <label htmlFor="">新北市</label>
      </div> */}
      <h5>下拉式選單select</h5>
      <label htmlFor="cars">Choose Fruit: </label>
      <select
        name="fruits"
        id="fruits"
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value);
        }}
      >
        <option value="">Options</option>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <h5>單選checkbox</h5>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked);
        }}
      />
      <label>我同意會員註冊條款</label>
      <h5>多選checkbox</h5>
      <p>Choose the music style you like.</p>
      {musicOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              value={v}
              checked={likeList.includes(v)}
              onChange={(e) => {
                // 判斷點擊的選項有沒有在狀態陣列中(有的話->代表狀態要由勾選改為取消勾選，反之亦然)
                if (likeList.includes(e.target.value)) {
                  const newLikeList = likeList.filter((v, i) => {
                    return v !== e.target.value;
                  });
                  setLikeList(newLikeList);
                } else {
                  const newLikeList = [...likeList, e.target.value];
                  setLikeList(newLikeList);
                }
              }}
            />
            <label>{v}</label>
          </div>
        );
      })}
      {/* <div>
        <input
          type="checkbox"
          value="hiphop"
          checked={likeList.includes('hiphop')}
          onChange={(e) => {
            // 判斷點擊的選項有沒有在狀態陣列中(有的話->代表狀態由勾選改為取消勾選，反之亦然)
            if (likeList.includes(e.target.value)) {
              const newLikeList = likeList.filter((v, i) => {
                return v !== e.target.value;
              });
              setLikeList(newLikeList);
            } else {
              const newLikeList = [...likeList, e.target.value];
              setLikeList(newLikeList);
            }
          }}
        />
        <label>hiphop</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="jazz"
          checked={likeList.includes('jazz')}
          onChange={(e) => {
            // 判斷點擊的選項有沒有在狀態陣列中(有的話->代表狀態由勾選改為取消勾選，反之亦然)
            if (likeList.includes(e.target.value)) {
              const newLikeList = likeList.filter((v, i) => {
                return v !== e.target.value;
              });
              setLikeList(newLikeList);
            } else {
              const newLikeList = [...likeList, e.target.value];
              setLikeList(newLikeList);
            }
          }}
        />
        <label>jazz</label>
      </div> */}
    </>
  );
}

export default InputValue;
