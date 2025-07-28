import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../include/Header';
import { useParams } from 'react-router-dom';
import ModifyComponent from '../components/products/ModifyComponent';

export default function ModifyPage() {
    const { pno } = useParams();

    return (
        <Container>
            <Header />
            <ModifyComponent pno={pno} />
        </Container>
    );
}