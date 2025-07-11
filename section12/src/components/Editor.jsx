import EmotionItem from "./EmotionItem";
import './Editor.css';
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStringedDate } from "../util/getStringedDate";

const emotionList = [
{
emotionId: 1,
emotionName: "완전 좋음",
},
{
emotionId: 2,
emotionName: "좋음",
},
{
emotionId: 3,
emotionName: "그럭저럭",
},
{
emotionId: 4,
emotionName: "나쁨",
},
{
emotionId: 5,
emotionName: "끔찍함",
},
];

const Editor = ({ initData, onSubmit })=>{
    const nav = useNavigate();

    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
    });

    // 마운트 되자마자, initData 상태가 변할 때마다. initData 존재하면 input 상태 관리에 저장해야 한다
    useEffect(() => {
        if (initData) {
            setInput({
                ...initData,
                createdDate: new Date(Number(initData.createdDate)),
            });
        }
    }, [initData]);

    // 데이터 수정
    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // 날짜를 수정한다면 날짜로 변경하라.
        if (name === "createdDate") {
            value = new Date(value);
        }
        setInput({
            ...input,
            [name]: value,
        });
    };

    // 데이터 전송 버튼
    const onSubmitButtonClick = ()=>{
        onSubmit(input)
    };
    
    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input name="createdDate" value={getStringedDate(input.createdDate)} onChange={onChangeInput} type="date" />
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                {emotionList.map((item) => (
                    <EmotionItem onClick={()=>{ onChangeInput({target: {name: "emotionId", value: item.emotionId}}) }}
                        key={item.emotionId}
                        {...item}
                        isSelected={item.emotionId === input.emotionId}
                    />
                ))}
        </div>
        </section>
        <section className="content_section">
        <h4>오늘의 일기</h4>
            <textarea name="content" value={input.content} onChange={onChangeInput} placeholder="오늘은 어땠나요?" />
            </section>
            <section className="button_section">
            <Button text={"취소하기"} onClick={()=>{nav(-1)}}/>
            <Button text={"작성완료"} type={"POSITIVE"} onClick={onSubmitButtonClick}/>
        </section>
        </div>
    );
};

export default Editor;