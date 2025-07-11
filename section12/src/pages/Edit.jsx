import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
    // /edit/3 3번 해당되는 다이어리 정보 가져오는 파라미터
    const params = useParams();
    // 공동 자료(이벤트 onDelete, onUpdate)
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    // 공동 자료(data: 모든 일기 정보)
    const data = useContext(DiaryStateContext);
    // 화면 이동
    const nav = useNavigate();
    // 공동 자료에서 3번에 해당되는 다이어리 정보 상태 관리
    const [curDiaryItem, setCurDiaryItem] = useState();
    // useEffect
    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(params.id)
        );

        if(!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true});
        }
        setCurDiaryItem(currentDiaryItem);
    }, [params.id]);

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!") ) {
            // 일기 삭제 로직
            console.log(`삭제하기 기능 ${params.id}`);
            onDelete(Number(params.id));
            //뒤로가기 방지
            nav("/", { replace: true });
        }
    };

    // 작성 완료
    const onSubmit = (input) => {
        onUpdate(
            Number(params.id),
            input.createdDate.getTime(),
            input.emotionId,
            input.content
        );
        // 뒤로 가기 방지하면서 페이지 이동
        nav("/", { replace: true });
    };

    return(
        <div>
            <Header
                title={"일기 편집하기"}
                leftChild={<Button text={"< 뒤로 가기"} onClick={()=>{nav(-1)}} />}
                rightChild={ <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} /> }
            />
        <Editor initData = {curDiaryItem} onSubmit={onSubmit} />
        </div>
    );
};
export default Edit;