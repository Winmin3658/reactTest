import { useEffect, useState } from 'react';
import { getList } from '../../api/diaryApi';
import useCustomMove from '../../hooks/useCustomMove';
import { Container, Table } from 'react-bootstrap';
import PageComponent from '../common/PageComponent';

const initState = {
    dtoList: [],
    pageNumList: [],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0,
};
const ListComponent = () => {
    const { page, size, moveToList, moveToRead, refresh } = useCustomMove();
    const [serverData, setServerData] = useState(initState);
    useEffect(() => {
        getList({ page, size }).then((data) => {
            console.log(data);
            setServerData(data);
        });
    }, [page, size, refresh]);
    return (
        <Container className="px-5 justify-content-center">
            <Table striped bordered hover size="lg">
                <thead>
                    <tr className="text-center">
                        <th>NO</th>
                        <th>TITLE</th>
                        <th>DATE</th>
                    </tr>
                </thead>
                <tbody>
                    {serverData.dtoList.map((diary) => (
                        <tr key={diary.tno} onClick={() => moveToRead(diary.tno)}>
                            <td className="text-center">{diary.tno}</td>
                            <td>{diary.title}</td>
                            <td>{diary.diaryDate}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <PageComponent
                serverData={serverData}
                moveToList={moveToList}
            />
        </Container>
    );
};
export default ListComponent;