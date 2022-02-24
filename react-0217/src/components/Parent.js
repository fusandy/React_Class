// 0221 課堂: 父元件傳遞資料到子元件 props
import Child from './Child';

function Parent(props) {
  return (
    <>
      <Child text="Hello" name="Jim" />
      <Child text={123} name={true} />
      <Child />
    </>
  );
}

export default Parent;
