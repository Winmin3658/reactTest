import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import { useParams } from 'react-router-dom';
import ModifyComponent from '../../component/product/ModifyComponent';

const ModifyPage = () => {
    const { pno } = useParams();
    return (
        <Container>
            <Header />
            <ModifyComponent pno={pno} />
        </Container>
    );
}
export default ModifyPage;