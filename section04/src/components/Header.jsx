import {useState} from 'react';

function Header() {
  const [count, setCount]= useState(0);
  const [light, setLight]= useState('OFF');
  // let count = 0;
  // 이벤트 핸들러
  const onClickBtn1 = ()=>{
    setLight(light === 'ON' ? 'OFF' : 'ON');
  };
  // const onClickBtn2 = (e)=>{
  //   setCount(count + 1); // count = count + 1
  // };
return (
  <>
    <div>
      <h1>{light}</h1>
      <button onClick={onClickBtn1}>
        {light === 'ON' ? '끄기' : '켜기'}
      </button>
    </div>
    <div>
      <h1>{count}</h1>
      <button onClick={() => {setCount(count + 1)}}> + </button>
    </div>
  </>
)
}

export default Header;