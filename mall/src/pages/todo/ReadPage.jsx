import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import { useCallback, useMemo } from 'react';
import { useParams, useNavigate, useSearchParams, createSearchParams } from 'react-router-dom';
import ReadComponent from '../../component/ReadComponent';

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
            <ReadComponent tno={tno} />
        </Container>
    );
}
export default ReadPage