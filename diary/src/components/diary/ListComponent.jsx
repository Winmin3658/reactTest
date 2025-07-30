import { useEffect, useState } from 'react';
import { getList, putOne } from '../../api/diaryApi';
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
    const handleCheckboxChange = (diary) => {
        const newCompleteStatus = !diary.complete;
        const updatedDiary = { ...diary, complete: newCompleteStatus };

        if (newCompleteStatus) {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
            const day = String(today.getDate()).padStart(2, '0');
            updatedDiary.diaryDate = `${year}-${month}-${day}`;
        } else {
            updatedDiary.diaryDate = null; // 체크 해제 시 날짜 초기화 (선택 사항)
        }

        putOne(updatedDiary).then(() => {
            // 서버 데이터 업데이트 후 목록 새로고침
            setServerData(prevData => ({
                ...prevData,
                dtoList: prevData.dtoList.map(item =>
                    item.tno === updatedDiary.tno ? updatedDiary : item
                )
            }));
            // refresh 상태를 토글하여 useEffect를 다시 실행 (선택 사항, 위 setServerData로 충분할 수 있음)
            // setRefresh(!refresh);
        }).catch(error => {
            console.error("Error updating diary:", error);
        });
    };

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
                        <th></th>
                        <th>NO</th>
                        <th>TITLE</th>
                        <th>DATE</th>
                    </tr>
                </thead>
                <tbody>
                    {serverData.dtoList.map((diary) => (
                        <tr key={diary.tno}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={diary.complete}
                                    onChange={() => handleCheckboxChange(diary)}
                                />
                            </td>
                            <td className="text-center" onClick={() => moveToRead(diary.tno)}>{diary.tno}</td>
                            <td onClick={() => moveToRead(diary.tno)}>{diary.title}</td>
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