import { useEffect, useState } from "react";
import { Form, Container } from "react-bootstrap";
import { getOne, putOne, deleteOne } from "../../api/diaryApi";
import InfoModal from "../common/InfoModal";

const initState = {
    tno: 0,
    title: "",
    content: "",
    diaryDate: "",
    complete: false,
};

const ModifyComponent = ({ tno, moveToList }) => {
    const [diary, setDiary] = useState({ ...initState });
    //모달창을 활성화 할것인지 안할것인지 결정
    const [infoModalOn, setInfoModalOn] = useState(false);
    //post 방식 입력완료후 결과값을 저장 상태객체
    const [result, setResult] = useState(null);

    useEffect(() => {
        getOne(tno).then((data) => {
            setDiary(data);
            console.log(data);
        });
    }, [tno]);

    //form 데이타를 수정했을때 상태값을 변경
    const handleChangeDiary = (e) => {
        diary[e.target.name] = e.target.value;
        setDiary({ ...diary });
    };

    //수정하기 버튼이벤트처리
    const handleClickModify = () => {
        putOne(diary).then((data) => {
            console.log("modify result: " + data);
            setResult(data.RESULT);
            //모달창 활성화
            setInfoModalOn(true);
        });
    };

    //삭제하기 버튼 이벤트처리
    const handleClickDelete = () => {
        deleteOne(tno).then((data) => {
            console.log("modify result: " + data);
            setResult(data.RESULT);
            //모달창 활성화
            setInfoModalOn(true);
        });
    };

    //모달창을 close
    const closeModal = () => {
        setInfoModalOn(false);
        moveToList();
    };

    return (
        <Container className="p-5">
            <InfoModal
                show={infoModalOn}
                title={`RESULT`}
                content={`${result}`}
                callbackFn={closeModal}
            />
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>TNO</Form.Label>
                    <Form.Control
                        value={tno}
                        type="text"
                        placeholder="Enter no"
                        disabled
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>TITLE</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={diary.title}
                        placeholder="Enter title"
                        onChange={handleChangeDiary}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>CONTENT</Form.Label>
                    <Form.Control
                        as="textarea"       // textarea로 변경
                        rows={5}            // 원하는 줄 수 (숫자 조절 가능)
                        name="content"      // name 속성 추가
                        value={diary.content}
                        placeholder="Enter content"
                        onChange={handleChangeDiary} // onChange 핸들러 추가
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>DATE</Form.Label>
                    <Form.Control
                        name="diaryDate"
                        value={diary.diaryDate}
                        type="date"
                        onChange={handleChangeDiary}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>COMPLETE</Form.Label>
                    <Form.Select
                        name="complete"
                        value={diary.complete}
                        onChange={handleChangeDiary}
                    >
                        <option value="true">Completed</option>
                        <option value="false">Not Yet</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <div className="d-flex justify-content-center gap-2 mt-5">
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={handleClickModify}
                >
                    수정하기
                </button>
                <button
                    className="btn btn-danger"
                    type="button"
                    onClick={handleClickDelete}
                >
                    삭제하기
                </button>
                <button
                    className="btn btn-primary"
                    type="text"
                    onClick={() => {
                        moveToList();
                    }}
                >
                    목록가기
                </button>
            </div>
        </Container>
    );
};
export default ModifyComponent;