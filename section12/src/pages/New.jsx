import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
    // 공동 자료(이벤트)
    const { onInsert } = useContext(DiaryDispatchContext);
    const nav = useNavigate();

    // 작성 완료
    const onSubmit = (input) => {
        onInsert(
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
                title={"새 일기 쓰기"}
                leftChild={<Button text={"< 뒤로 가기"} onClick={()=>{nav(-1)}} />}
            />
        <Editor onSubmit={onSubmit} />
        </div>
    );
};
export default New;