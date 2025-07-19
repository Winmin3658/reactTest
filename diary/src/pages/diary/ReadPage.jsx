import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useCallback } from 'react';

const ReadPage = () => {
    const { tno } = useParams()
    const nav = useNavigate()
    const [queryParams] = useSearchParams()
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10
    const queryStr = createSearchParams({ page, size }).toString()

    const moveToModify = useCallback((tno) => {
        nav({
            pathname: `/diary/modify/${tno}`
            , search: queryStr
        })
    }, [tno, page, size])
    const moveToList = useCallback(() => {
        nav({ pathname: `/diary/list`, search: queryStr })
    }, [page, size])
    return (
        <Container >
            <Header />
            <div className="d-flex justify-content-center gap-2"> Diary Read Page Component {tno}
                <div>
                    <button onClick={() => moveToModify(tno)}>Test Modify</button><br />
                    <button onClick={() => moveToList()}>Test List</button>
                </div>
            </div>
        </Container >
    );
}
export default ReadPage;