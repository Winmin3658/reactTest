import { useEffect, useState } from "react"
import { getOne } from "../../api/diaryApi"
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const initState = {
    tno: '',
    title: '',
    content: '',
    diaryDate: null,
    complete: false,
};
const ReadComponent = ({ tno, moveToList, moveToModify }) => {
    const [diary, setDiary] = useState(initState);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        getOne(tno).then((data) => {
            console.log(data);
            setDiary(data);
        });
    }, [tno]);

    return (
        <Container className="p-5">
            <Form>
                <Form.Group>
                    <Form.Label>NO</Form.Label>
                    <Form.Control
                        value={diary.tno}
                        type="text"
                        placeholder="Enter no"
                        disabled
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>TITLE</Form.Label>
                    <Form.Control
                        type="text"
                        value={diary.title}
                        placeholder="Enter title"
                        readOnly
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>CONTENT</Form.Label>
                    <Form.Control
                        as="textarea"           // textarea로 변경
                        rows={5}                // 원하는 줄 수
                        value={diary.content}
                        readOnly                // 읽기 전용
                        placeholder="Enter content"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>DATE</Form.Label>
                    <Form.Control value={diary.diaryDate} type="text" disabled />
                </Form.Group>
                <Form.Group>
                    <Form.Label>COMPLETE</Form.Label>
                    <Form.Control
                        value={diary.complete ? 'Completed' : 'Not Yet'}
                        type="text"
                        readOnly
                    />
                </Form.Group>
            </Form>
            <div className="d-flex justify-content-center gap-2 mt-5">
                <button className="btn btn-secondary" type="button" onClick={() => { moveToModify(tno); }}>수정하기</button>
                <button className="btn btn-primary" type="button" onClick={() => { moveToList(); }}>목록가기</button>
            </div>
        </Container>
    );
};
export default ReadComponent;