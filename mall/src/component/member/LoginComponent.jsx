import { React, useState } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../slices/loginSlice';

const initState = {
    email: '',
    pw: '',
};
export default function LoginComponent() {
    const [loginParam, setLoginParam] = useState({ ...initState });
    const dispatch = useDispatch()

    const handleChange = (e) => {
        loginParam[e.target.name] = e.target.value;
        setLoginParam({ ...loginParam });
    };

    // 서버로 전송해서 username, password => access token => cookie 넣고 => loginSlice 금고(email: 로그인한 진짜 이메일)
    const handleClickLogin = (e) => {
        dispatch(login(loginParam))
    };


    return (
        <>
            <h2 className="text-center mb-3">Login Component</h2>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    value={loginParam.email}
                    onChange={handleChange}
                />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control name="pw" type="password" placeholder="Password" value={loginParam.pw}
                    onChange={handleChange}
                />
            </FloatingLabel>
            <div className="d-grid gap-2 mt-3">
                <Button variant="outline-primary" onClick={handleClickLogin}>
                    로그인
                </Button>
            </div>
        </>
    );
}