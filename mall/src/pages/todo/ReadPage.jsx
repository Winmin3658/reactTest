import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import { useCallback, useMemo } from 'react';
import { useParams, useNavigate, useSearchParams, createSearchParams } from 'react-router-dom';

const ReadPage = () => {
    const { tno } = useParams();
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10
    const queryStr = useMemo(() => {
        return createSearchParams({ page, size }).toString();
    }, [page, size]);
    const moveToModify = useCallback((tno) => {
        navigate({ pathname: `/todo/modify/${tno}`, search: queryStr });
    }, [navigate, queryStr]);
    const moveToList = useCallback(() => {
        navigate({ pathname: `/todo/list`, search: queryStr });
    }, [navigate, queryStr])

    return (
        <Container>
            <Header />
            To do ReadPage {tno}
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-outline-success" type='button' onClick={() => { moveToModify(tno) }}>
                    Test Move Modify
                </button>
                <button class="btn btn-outline-secondary" type='button' onClick={() => { moveToList() }}>
                    Test Move List
                </button>
            </div>
        </Container>
    );
}
export default ReadPage