import { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import { Container } from "react-bootstrap";
import PageComponent from "../common/PageComponent";

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
    current: 0
}
const ListComponent = () => {
    const { page, size, moveToList, moveToRead, refresh } = useCustomMove();
    //serverData는 나중에 사용
    const [serverData, setServerData] = useState(initState);
    console.log("DTO LIST", serverData.dtoList);

    useEffect(() => {
        getList({ page, size }).then(data => {
            console.log(data)
            setServerData(data)
        })
    }, [page, size, refresh]);
    return (
        <>
            <Container className="px-5 justify-content-center mt-5" >
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th className="p-3" scope="col">TNO</th>
                            <th className="p-3" scope="col">TITLE</th>
                            <th className="p-3" scope="col">DATE</th>
                            <th className="p-3" scope="col">WRITER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serverData.dtoList.map((todo) => {
                            return (
                                <tr key={todo.tno} className="text-center" onClick={() => moveToRead(todo.tno)} >
                                    <td className="p-2">{todo.tno}</td>
                                    <td className="p-2">{todo.title}</td>
                                    <td className="p-2">{todo.dueDate}</td>
                                    <td className="p-2">{todo.writer}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <PageComponent serverData={serverData} moveToList={moveToList} />
            </Container>
        </>
    );
}
export default ListComponent;