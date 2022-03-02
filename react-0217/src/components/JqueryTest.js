// 0302 課堂: JqueryTest
import $ from 'jquery';
import { useEffect } from 'react';

function JqueryTest(props) {
  // didMount
  useEffect(() => {
    //jquery code
    console.log("$('#title').text():", $('#title').text());
    $('#one').on('click', () => {
      return alert('Hello' + $('#title').text());
    });
  }, []);

  return (
    <>
      <h1 id="title">React</h1>
      <button id="one">Click Me</button>
    </>
  );
}

export default JqueryTest;
