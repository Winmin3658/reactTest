import Header from './componenets/Header';
import Edit from './componenets/Edit';
import List from './componenets/List';
import Exam from './componenets/Exam';
import './App.css';
import {useState, useRef, useReducer, useCallback, createContext, useMemo} from 'react';

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

// createContext() 생성해서 export 시킨다(context: 자바(static 유사), 공동으로 사용되는 장소)
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

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

  // 딱 한 번만 발생하도록 처리(useContext 사용)
  const memorizeddispatch = useMemo(()=>{
    return { onInsert, onUpdate, onDelete};
  }, []);

  return (
    <>
      <div className='App'>
        <Header />
        <TodoStateContext.Provider value={{todos}}>
        <TodoDispatchContext.Provider value={memorizeddispatch}>
        <Edit onInsert = {onInsert}/>
        <List todos = {todos} onUpdate={onUpdate} onDelete={onDelete} />
        </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>
    </>
  )
}

export default App
