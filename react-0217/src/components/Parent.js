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
