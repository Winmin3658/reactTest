import './App.css'
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import { useReducer, useRef, createContext } from 'react';
import Button from './components/Button';

const mockData =[
  {
  id: 1,
  createdDate: new Date().getTime(),
  emotionId: 1,
  content: "1번 일기 내용",
  },
  {
  id: 2,
  createdDate: new Date().getTime(),
  emotionId: 2,
  content: "2번 일기 내용",
  },
  {
  id: 3,
  createdDate: new Date().getTime(),
  emotionId: 3,
  content: "3번 일기 내용",
  }
];

function reducer(state, action) {
  switch(action.type) {
    case "INSERT": return [action.data, ...state];
    case "UPDATE": return state.map((item)=> item.id === action.data.id ? action.data : item);
    case "DELETE": return state.filter((item)=> item.id !== action.id);
    default: return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(4);

  // 입력하기
  const onInsert = (createdDate, emotionId, content)=>{
    dispatch({
      type: 'INSERT',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    })
  };

  // 수정하기
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
      id,
      createdDate,
      emotionId,
      content,
      },
    });
  };

  // 삭제하기
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
    <DiaryStateContext.Provider value = {data}>
      <DiaryDispatchContext.Provider value = {{onInsert, onUpdate, onDelete}}>
      {/* <div className='App'>
        <Button text={'insert'} onClick={()=>{onInsert(new Date().getTime(), 3, '민우가 멋있는 error 발견')}}/>
        <Button text={'update'} onClick={()=>{onUpdate(3,new Date().getTime(), 1, '민우가 멋진 error 발견')}}/>
        <Button text={'delete'} onClick={()=>{onDelete(3)}}/>
      </div> */}
      {/* <div className='App'>
        <Header title={'리액트 홈페이지'} leftChild={<Button text={'<'}/>} rightChild={<Button text={'>'}/>}/>
      </div>
      <div className='App'>
        <Button text={'시작하기'} type={'POSITIVE'} onClick={()=>{alert('시작하기')}} />
        <Button text={'정지하기'} type={'NEGATIVE'} onClick={()=>{alert('정지하기')}} />
        <Button text={'홈으로 가기'} type={'POSITIVE'} onClick={()=>{alert('홈으로 가기')}} />
      </div> */}
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/new/*' element={ <New /> } />
        <Route path='/diary/:id' element={ <Diary /> } />
        <Route path='/edit/:id' element={ <Edit /> } />
        <Route path='/*' element={ <NotFound /> } />
      </Routes>
      </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
