import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import ListComponent from '../../components/products/ListComponent';

export default function ListPage() {
    return (
        <Container>
            <Header />
            <ListComponent />
        </Container>
    );
}