import './List.css';
import ListItem from '../../../section08/src/componenets/ListItem';
import {useState, useMemo} from 'react';

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");

    const onChangeInput = (e) => {
        setSearch(e.target.value);
    };

    const getFilterTodos = (e) => {
        if(search === '') {
            return todos;
        }
        return todos.filter((data)=>{
            return data.content.toLowerCase().includes(search.toLowerCase());
        });
    };

    const filterTodos = getFilterTodos();

    // 랜더링이 일어날 때마다, todo 전체 개수, todo isDone=true 완료된 개수, todo isDone=false 완료되지 않은 개수
    // getAnalyzeData 최적화할 것 => useMemo(()=>{},[]) useEffect(()=>{},[])
    // useEffect(()=>{},[]), useEffect(()=>{},[todos]), useEffect(()=>{}), useEffect(()=>{return ()=>{}},[])
    

    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        console.log('useMemo 최적화 되고 있어요');
        const totalCount = todos.length;
        const doneCount = todos.filter((data) => data.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return { totalCount, doneCount, notDoneCount };
    }, [todos]);


    return (
        <div className="List">
            <h4>Todo List </h4>
            <div>
                <p>totalCount: {totalCount}</p>
                <p>doneCount: {doneCount}</p>
                <p>notDoneCount: {notDoneCount}</p>
            </div>
            <input value={search} placeholder="검색어를 입력하세요" onChange={onChangeInput}/>
            <div className="todos_wrapper">
                {filterTodos.map((data) => {return <ListItem key={data.id} {...data} onUpdate={onUpdate} onDelete={onDelete}/>})}
            </div>
        </div>
    )
};

export default List;