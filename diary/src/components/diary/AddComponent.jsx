import { useState, React } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import useCustomMove from '../../hooks/useCustomMove';
import { postAdd } from '../../api/diaryApi';
import InfoModal from '../common/InfoModal';

const initState = { title: '', content: '', date: '' };
export default function AddComponent() {
    const [todo, setTodo] = useState({ ...initState });
    const [result, setResult] = useState(null);
    const { moveToList } = useCustomMove();
    const [infoModalOn, setInfoModalOn] = useState(false);

    const handleChangeTodo = (e) => {
        todo[e.target.name] = e.target.value;
        setTodo({ ...todo });
    };
    //저장버튼클릭
    const handleClickAdd = () => {
        postAdd(todo)
            .then((result) => {
                console.log(result)
                setResult(result.TNO); //결과 데이터 변경
                setInfoModalOn(true);
                setTodo({ ...initState }); // 초기화
            })
            .catch((e) => {
                console.error(e);
            });
        console.log(todo);
    };
    const closeModal = () => {
        setInfoModalOn(false);
        moveToList();
    };
    return (
        <Container className="p-5">
            <InfoModal
                show={infoModalOn}
                onHide={() => setInfoModalOn(false)}
                title={`ADD RESULT`}
                content={`New ${result} Added`}
                callbackFn={() => closeModal()}
            />
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>TITLE</Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                        value={todo.title}
                        onChange={handleChangeTodo}
                        placeholder="Enter Title"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>CONTENT</Form.Label>
                    <Form.Control
                        name="content"
                        type="text"
                        value={todo.content}
                        onChange={handleChangeTodo}
                        placeholder="Enter Content"
                    />
                </Form.Group>
                <Form.Group className="mb-5">
                    <Form.Label>DATE</Form.Label>
                    <Form.Control
                        name="diaryDate"
                        type="date"
                        value={todo.diaryDate}
                        onChange={handleChangeTodo}
                        placeholder="Enter Date"
                    />
                </Form.Group>
            </Form>
            <div className="d-flex justify-content-center gap-2 ">
                <Button variant="primary" type="button" onClick={handleClickAdd}>저장</Button>
                <Button variant="primary" type="button" onClick={() => { moveToList({ page: 1 }); }}>목록</Button>
            </div>
        </Container>
    );
}
