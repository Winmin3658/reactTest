import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import AddComponent from '../../components/diary/AddComponent';

export default function AddPage() {
    return (
        <>
            <Header />
            <AddComponent />
        </>
    );
}