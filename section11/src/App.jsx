import Header from './componenets/Header';
import Edit from './componenets/Edit';
import List from './componenets/List';
import Exam from './componenets/Exam';
import './App.css';
import {useState, useRef, useReducer, useCallback} from 'react';

const mockData = [
  {id: 0, isDone: false, content: 'react 공부하기', date: new Date().getTime()},
  {id: 1, isDone: false, content: 'spring boot 공부하기', date: new Date().getTime()},
  {id: 2, isDone: false, content: 'oracle 공부하기', date: new Date().getTime()}
];

function reducer(todos, action) {
  switch (action.type) {
    case "INSERT" : return [action.data, ...todos];
    case "UPDATE" : return todos.map((data)=>{
      return data.id === action.data ? {...data, isDone: !data.isDone} : data
    });
    case "DELETE" : return todos.filter((data)=>{
      return data.id !== action.data
    });
    default : return todos;
  };
}

function App() {
  // 상태 관리(전체 데이터 관리)
  // const [todos, setTodos] = useState(mockData);
  const[todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3); // {current: 3}

  // 삽입하기
  // useCallback 
  const onInsert = useCallback((content) => {
    dispatch({
      type: "INSERT",
      data: {
        id: idRef.current++, isDone: false, content: content, date: new Date().getTime()
      }
    });
  },[]);
  /* const onInsert = (content) => {
    dispatch({
      type: "INSERT",
      data: {
        id: idRef.current++, isDone: false, content: content, date: new Date().getTime()
      }
    });
    // const newTodo = {id: idRef.current++, isDone: false, content: content, date: new Date().getTime()};
    // setTodos([newTodo, ...todos]);
  }; */

  // 수정하기
  const onUpdate = useCallback((tagId)=>{
    dispatch({
      type: "UPDATE",
      data: tagId,
    });
  },[]);
  /* const onUpdate = (tagId) => {
    dispatch({
      type: "UPDATE",
      data: tagId,
    });
    // setTodos(
    //   todos.map((data)=>{return data.id === tagId ? {...data, isDone: !data.isDone} : data})
    // );
  }; */

  // 삭제하기
  const onDelete = useCallback((tagId)=>{
     dispatch({
      type:"DELETE",
      data: tagId,
    });
  },[]);
  /* const onDelete = (tagId)=>{
    dispatch({
      type:"DELETE",
      data: tagId,
    });
    // setTodos(
    //   todos.filter((data)=>{
    //     return data.id !== tagId;
    //   })
    // );
  }; */

  return (
    <>
      <div className='App'>
        <Header />
        <Exam />
        <Edit onInsert = {onInsert}/>
        <List todos = {todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  )
}

export default App
