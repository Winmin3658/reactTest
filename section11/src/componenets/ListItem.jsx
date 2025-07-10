import { useContext } from 'react';
import './ListItem.css';
import {memo} from 'react';
import { TodoDispatchContext } from '../App';

const ListItem = ({id, isDone, content, date}) => {
    
    console.log(`listItem components ${id}`);
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    const onChangeCheckBox = ()=>{
        onUpdate(id);
    };

    const onClickBtn = ()=>{
        onDelete(id);
    };
    return (
        <div className="ListItem">
            <input readOnly type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickBtn}>삭제</button>
        </div>
    );
};

// export default memo(ListItem, (prevProps, nextProps) => {
//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.iisDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;
//     return true;
// });
export default memo(ListItem);