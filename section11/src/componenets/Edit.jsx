import './Edit.css';
import { useState, useRef, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const Edit = () => {
    const { onInsert } = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onChangeInput = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = (e) => {
        if(content === '') {
            window.alert('값을 입력해야만 저장됩니다');
            inputRef.current.focus();
            return;
        }
        onInsert(content);
        setContent("");
    };

    const onKeyDown = (e) => {
        // e.keyCode === 13 엔터
        if(e.keyCode === 13) {
            if(content === '') {
                window.alert('값을 입력해야만 저장됩니다');
                inputRef.current.focus();
                return;
            }
            onSubmit();
        }
    };

    return (
        <div className="Edit">
            <input ref={inputRef} value={content} placeholder="새로운 Todo..." type="text" onChange={onChangeInput} onKeyDown={onKeyDown}/>
            <button onClick={onSubmit}>추가</button>
        </div>
    )
};

export default Edit;