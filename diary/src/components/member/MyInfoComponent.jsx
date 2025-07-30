import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { getOne, modifyMember } from '../../api/memberApi';
import FetchingModal from '../common/FetchingModal';
import useCustomLogin from '../../hooks/useCustomLogin';
import InfoModal from '../common/InfoModal';

const MyInfoComponent = () => {
    const loginState = useSelector(state => state.loginSlice);
    const { moveToLoginReturn } = useCustomLogin();

    const [memberInfo, setMemberInfo] = useState({
        email: '',
        nickname: '',
        social: false,
    });
    const [fetching, setFetching] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (!loginState.email) {
            moveToLoginReturn();
            return;
        }
        setFetching(true);
        getOne(loginState.email).then(data => {
            setMemberInfo(data);
            setFetching(false);
        }).catch(error => {
            console.error("Error fetching member info:", error);
            setFetching(false);
            setResult("Failed to load member info.");
        });
    }, [loginState.email, moveToLoginReturn]);

    const handleChange = (e) => {
        setMemberInfo({
            ...memberInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleClickModify = () => {
        setFetching(true);
        modifyMember(memberInfo).then(data => {
            console.log("Modify result:", data);
            setResult("Modified");
            setFetching(false);
        }).catch(error => {
            console.error("Error modifying member info:", error);
            setFetching(false);
            setResult("Failed to modify member info.");
        });
    };

    const closeModal = () => {
        setResult(null);
    };

    return (
        <Container className="p-5">
            {fetching ? <FetchingModal /> : <></>}
            {result && (
                <InfoModal
                    title={result === "Modified" ? "수정 완료" : "오류"}
                    content={result === "Modified" ? "회원 정보가 성공적으로 수정되었습니다." : result}
                    callbackFn={closeModal}
                />
            )}
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control type="text" name="email" value={memberInfo.email} readOnly />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>닉네임</Form.Label>
                    <Form.Control type="text" name="nickname" value={memberInfo.nickname} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>소셜 로그인</Form.Label>
                    <Form.Control type="text" name="social" value={memberInfo.social ? '예' : '아니오'} readOnly />
                </Form.Group>
                <Button variant="primary" onClick={handleClickModify}>
                    정보 수정
                </Button>
            </Form>
        </Container>
    );
};

export default MyInfoComponent;