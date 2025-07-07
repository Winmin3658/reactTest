import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState, useEffect } from 'react';
import Even from './components/Even';

function App() {
  // 상태값 변화
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  // 마운트 (App 생성되었을 때 자동으로 실행하는 기능: DB 자료 가져옴)
  useEffect(() => {
    // 여기에 우리가 마운트 될 때 하고 싶은 것을 처리
    console.log(`mount count = ${count} input = ${input}`);
  },[count, input]);

  // 이벤트 핸들러 처리
  const onClickButton = (value) => {
    setCount(count + value);
  }

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} name={"phone"} onChange={onChangeInput} type="text" />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  );
}

export default App;
