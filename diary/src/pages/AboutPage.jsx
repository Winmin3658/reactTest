import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../include/Header';
const AboutPage = () => {
    return (
        <>
            <Header />
            <Container className="p-4">

                <h2 className="mt-4 text-center">📘 일기장 프로젝트 소개</h2>

                <Row className="mt-5 justify-content-center">
                    <Col md={6}>
                        <Card className="p-3 shadow-sm">
                            <h4>📝 프로젝트 개요</h4>
                            <p>
                                이 일기장 프로젝트는 사용자가 일기를 작성하고, 수정하고, 삭제할 수 있는 간단한 CRUD 기반의 웹 애플리케이션입니다.
                                React와 Spring Boot를 이용해 프론트엔드와 백엔드를 분리하여 개발하였습니다.
                            </p>

                            <h5>주요 기능</h5>
                            <ul>
                                <li>일기 작성(Create)</li>
                                <li>일기 목록 조회(Read)</li>
                                <li>일기 수정(Update)</li>
                                <li>일기 삭제(Delete)</li>
                            </ul>

                            <h5>기술 스택</h5>
                            <ul>
                                <li><b>Frontend:</b> React, React-Bootstrap, Axios, React Router</li>
                                <li><b>Backend:</b> Spring Boot, JPA, Lombok, Oracle</li>
                            </ul>
                        </Card>
                    </Col>
                </Row>

                <div className="text-center mt-5">
                    <p className="text-muted">© 2025 Diary Project by 승민</p>
                </div>
            </Container>
        </>
    );
};
export default AboutPage;