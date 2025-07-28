import React from 'react';
import { useCallback } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../include/Header';
import { createSearchParams, useNavigate, useParams, useSearchParams, } from 'react-router-dom';
import ReadComponent from '../components/product/ReadComponent';

export default function ReadPage() {
    const { pno } = useParams();
    return (
        <Container>
            <Header />
            <ReadComponent pno={pno} />
        </Container>
    );
}