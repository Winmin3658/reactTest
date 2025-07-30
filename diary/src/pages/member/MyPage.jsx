import React, { Suspense, lazy } from 'react';
import { Container } from 'react-bootstrap';
import Header from "../../include/Header";
import MyInfoComponent from '../../components/member/MyInfoComponent';
import Loading from '../../pages/Loading';

const MyPage = () => {
    return (
        <Container>
            <Header />
            <Suspense fallback={<Loading />}>
                <MyInfoComponent />
            </Suspense>
        </Container>
    );
};

export default MyPage;